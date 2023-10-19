import { useRef, useState, useEffect } from 'react';
import * as THREE from 'three'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Preload, shaderMaterial, useGLTF, ScrollControls, Scroll, useScroll } from "@react-three/drei";



function FaceModel(props) {
    const ref = useRef()
    const modelRef = useRef()
    const { nodes, materials } = useGLTF('./face2/scene.gltf')
    useGLTF.preload('./face/scene.gltf')


    useFrame((state, delta) => (ref.current.time += delta))
    const ColorShiftMaterial = shaderMaterial(
        {
            time: 0.0,
            speed: 10.0,
            charSize: { x: 3, y: 2 },
            charResolution: 5,
            color: new THREE.Color('#D80032'),
            resolution: { x: 1.5, y: 1.5 },
        },
        // vertex shader
        /*glsl*/`
        varying vec2 vUv;

        void main(){
            gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);
            vUv=uv;
        }
        `,
        `
        uniform float time;
        uniform float speed;
        uniform vec2 charSize;
        uniform float charResolution;
        uniform vec3 color;
        uniform vec2 resolution;
        varying vec2 vUv;
        
        float seed=2.;
        
        float random(float x){
            return fract(sin(x)*43758.5453);
        }
        
        float random(vec2 st){
            return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453);
        }
        
        float randomChar(vec2 outer,vec2 inner){
            vec2 margin=1.-charSize;
            vec2 borders=step(margin,inner)*step(margin,1.-inner);
            return step(
                .5,
                random(outer*seed+floor(inner*charResolution))
            )*borders.x*borders.y;
        }
        
        vec4 matrix(vec2 st){
            float rows=200.;
            vec2 ipos=floor(st*rows)+vec2(1.,0.);
            ipos+=vec2(0.,floor(time*speed*random(ipos.x)));
            vec2 fpos=fract(st*rows);
            vec2 center=.5-fpos;
            float pct=random(ipos);
            float glow=(1.-dot(center,center)*3.)*2.;
            float result=randomChar(ipos,fpos)*pct*glow;
            return vec4(color*result,result);
        }
        void main(){
            vec2 st=vUv*resolution;
            gl_FragColor=vec4(0.,0.,0.,1.)+matrix(st);
        }
        
        `
    )

    extend({ ColorShiftMaterial })


    return (
        <group {...props} dispose={null} scale={15} position={[0, -24, -0.1]} rotation={[0, 1.3, 0]} ref={modelRef} >
            <group rotation={[-Math.PI / 2, 0.015, -0.593]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh geometry={nodes.eye_low_L_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
                        <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} />
                    </mesh>
                    <mesh geometry={nodes.eye_low_L001_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
                        <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} />
                    </mesh>
                    <mesh geometry={nodes.man_body_0014_uv_map_Material004_0.geometry} material={materials['Material.004']} rotation={[-Math.PI / 2, 0, 0]} scale={100} >
                        <colorShiftMaterial ref={ref} key={ColorShiftMaterial.key} />
                    </mesh>
                </group>
            </group>
        </group>
    )
}
useGLTF.preload('./face2/scene.gltf')



const HomeCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            style={{ position: 'absolute', zIndex: -1 }}
            gl={{ preserveDrawingBuffer: true }}
            frameloop='always'
            dpr={[1, 2]}
            camera={{ position: [15, 2, 0], fov: 25 }}
        >
            <pointLight intensity={10} />

            <FaceModel />
            {/* <ScrollControls damping={0.1} pages={6}>
                    <Scroll>
                     
                    </Scroll>
                    <Scroll html style={{ width: '100%' }}>
              
                    </Scroll>
                </ScrollControls> */}
            <Preload all />
        </Canvas >
    );
};


export default HomeCanvas