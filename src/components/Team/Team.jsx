import './Team.css'
import React from "react";
import Card from './TeamCard/TeamCard'
import img from '../../assets/images/img_1.jpg'

const Team = () => {
    return (
        <div className='team' id='team'>
            <div className='team__container'>
                <h3 className='team__title'>Coordinators</h3>
                <div className='team__list__container'>
                    <Card name='hursun' designation='coordinator' image={img} />
                    <Card name='hursun' designation='coordinator' image={img} />
                    <Card name='hursun' designation='coordinator' image={img} />
                </div>
                <h3 className='team__title'>Organisers</h3>
                <div className='team__list__container'>
                    <Card name='hursun' designation='coordinator' image={img} />
                    <Card name='hursun' designation='coordinator' image={img} />
                    <Card name='hursun' designation='coordinator' image={img} />
                    <Card name='hursun' designation='coordinator' image={img} />
                </div>
            </div>
        </div>
    )
}

export default Team