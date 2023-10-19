import './Event.css'
import React from "react";
import Carousel from '../Carousel/Carousel'

const Event = () => {
    return (
        <div className='event' id='event'>
            <div className='event__container'>
                {/* <h2 className='event__title'>Events</h2>
                <p className='event__para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe assumenda vel est nam, officiis doloribus sapiente minus nobis, at ad incidunt. Ipsum ab voluptatibus dolorem nemo quidem soluta alias voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse laboriosam nisi explicabo eligendi distinctio tempora, possimus repudiandae nobis repellat optio dolor consequuntur ipsa recusandae eaque neque animi quis! Ipsam.</p> */}
                <h3 className='event__sub__title'>Technical Events</h3>
                <Carousel />
                <h3 className='event__sub__title'>Non - Technical Events</h3>
                <Carousel />
            </div>
        </div>
    )
}

export default Event