import './Hero.css'
import React from "react";
import CountdownTimer from '../CountDown/CountdownTimer';
import Button from '../Button/Button';
import HeroCanvas from '../../canvas/Home';

const Hero = () => {
    return (
        <div className="hero" id='hero'>
            <HeroCanvas />
            <div className="hero__container">
                <h1 className='hero__title'>INNOVENTZZ'23</h1>
                <CountdownTimer />
                <Button onClick={() => { }}>Register</Button>
            </div>
        </div>
    )
}

export default Hero