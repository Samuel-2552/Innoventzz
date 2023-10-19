import './Header.css'
import { useEffect, useRef, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { motion } from 'framer-motion'

// const NavLink = ({ children, href }: {
//     children: string,
//     href: string,
// }) => {
//     const pathname = usePathname()
//     const isActive = pathname === href

//     return <Link href={href} className={isActive ? styles.link__item__link__active:styles.link__item__link}>{children}</Link>
// }

export default function Header() {
    const containerRef = useRef()
    const [state, setState] = useState(false)

    const helperFunction = () => {
        setState((state) => !state)
    }

    const variant = {
        hidden: {
            left: '-100%'
        },
        show: {
            left: '0',
            transition: {
                ease: 'easeOut',
            }
        }
    }


    return (
        <div className='navbar'>
            <div className="navbar__container" >
                <div className="menu" onClick={helperFunction}>
                    <RxHamburgerMenu size={24} />
                </div>
                <div className="navbar__logo__container">
                    <div className="navbar__logo">
                        <img className="navbar__logo__img" src={logo} alt='picture of the person' />
                    </div>
                </div>
                <motion.div layout className="navbar__link__container" ref={containerRef} variants={variant} animate={state ? 'show' : 'hidden'}>
                    <ul className="link__container__items">
                        <li className="mobile__container">
                            <div className="menu" onClick={helperFunction}>
                                <AiOutlineClose size={24} />
                            </div>
                            <div className="navbar__logo">
                                <img className="navbar__logo__img" src={logo} alt='picture of the person' />
                            </div>
                        </li>
                        <li className="link__container__item">
                            <Link href='/' className='link__item__link' >Home</Link></li>
                        <li className="link__container__item">
                            <a href='#about' className='link__item__link'>About</a></li>
                        <li className="link__container__item">
                            <a href="#event" className='link__item__link'>Events</a></li>
                        <li className="link__container__item">
                            <a href='#team' className='link__item__link'>Team</a></li>
                        <li className="#gallery">
                            <a href='/contact' className='link__item__link'>Contact</a></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}