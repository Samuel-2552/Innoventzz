import './Gallery.css'
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

import slide_image_1 from '../../assets/images/img_1.jpg';
import slide_image_2 from '../../assets/images/img_2.jpg';
import slide_image_3 from '../../assets/images/img_3.jpg';
import slide_image_4 from '../../assets/images/img_4.jpg';
import slide_image_5 from '../../assets/images/img_5.jpg';
import Button from '../Button/Button';

const Gallery = () => {
    return (
        <div className='gallery' id='gallery'>
            <div className='gallery__container'>
                <h3 className='gallery__title'>Gallery</h3>
                <div className='gallery__images'>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 750: 2, 900: 5 }}
                        style={{ width: '100%', height: '100%' }}
                    >
                        <Masonry>
                            <img src={slide_image_1} alt="slide_image" className='gallery__image' />
                            <img src={slide_image_2} alt="slide_image" className='gallery__image' />
                            <img src={slide_image_3} alt="slide_image" className='gallery__image' />
                            <img src={slide_image_4} alt="slide_image" className='gallery__image' />
                            <img src={slide_image_5} alt="slide_image" className='gallery__image' />
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
                <Button>View More</Button>
            </div>
        </div>
    )
}

export default Gallery