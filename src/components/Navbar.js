import { useRef, useState } from 'react';
import iconBars from '../assets/Hamburger.svg';
import iconClose from '../assets/Close.svg';
import styled from 'styled-components'

const Navbar = () => {
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav");
    // }
    const showNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <h3>Scandinavian Adventures</h3>
            <nav className={isOpen ? 'responsive_nav' : ''} ref={navRef}>
                <a href="/experiences">Experiences</a>
                <a href="/company">Company</a>
                <a href="/support">Support</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <img src={iconClose} alt="bars burger menu" />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <img src={iconBars} alt="bars burger menu" />
            </button>
        </header>
    );
};

export default Navbar;
