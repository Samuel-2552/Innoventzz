import './About.css'
import React from "react";
import logo from '../../assets/logo.png'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='about__container'>

                <div className='about__card'>
                    <div className='about__card__img__container'>
                        <img src={logo} className='about__card__img' />
                    </div>

                    <div className='about__card__sub'>
                        <h3 className='about__card__title'>INNOVENTZZ'23</h3>
                        <p className='about__card__para'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolore, exercitationem aut quam dolores voluptas veniam blanditiis architecto similique odio sapiente magnam nihil recusandae quisquam dicta at odit alias ut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora, sit molestias fugiat in debitis voluptas vitae aperiam doloremque! Sint fugit quo velit similique quidem officiis ullam odio at quibusdam?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam iste eveniet natus laborum repellendus doloribus sapiente deserunt excepturi repudiandae, ratione accusamus libero quos eos, minima nobis ipsa repellat obcaecati!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem dolore, exercitationem aut quam dolores voluptas veniam blanditiis architecto similique odio sapiente magnam nihil recusandae quisquam dicta at odit alias ut!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora, sit molestias fugiat in debitis voluptas vitae aperiam doloremque! Sint fugit quo velit similique quidem officiis ullam odio at quibusdam?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam iste eveniet natus laborum repellendus doloribus sapiente deserunt excepturi repudiandae, ratione accusamus libero quos eos, minima nobis ipsa repellat obcaecati!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About