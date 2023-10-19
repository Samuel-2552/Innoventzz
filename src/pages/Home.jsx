import './Home.css'
import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Event from '../components/Event/Event'
import Team from '../components/Team/Team'
import Marque from '../components/Marque/Marque'
import Gallery from '../components/Gallery/Gallery'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import BackgroundCanvas from '../canvas/Background'

const Home = () => {
    return (
        <div className='home'>
            <BackgroundCanvas />
            <Hero />
            <About />
            <Event />
            <Marque />
            <Team />
            <Gallery />
            <Contact />
            <Footer />
        </div >
    )
}
export default Home