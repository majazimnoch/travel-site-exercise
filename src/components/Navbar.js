import { useRef, useState } from 'react';
import './NavbarStyling.css';
import iconBars from '../assets/Hamburger.svg';
import iconClose from '../assets/Close.svg';
import iconBasket from '../assets/emptybasket.svg'
import { StyledH3 } from './Header';

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
            <StyledH3 nav><a href="./">Scandinavian Adventures</a></StyledH3>
            <div className="nav-container">
                <nav className={isOpen ? 'responsive_nav' : ''} ref={navRef}>
                <a href="/experiences">Experiences</a>
                <a href="/company">Company</a>
                <a href="/support">Support</a>
                <img src={iconBasket} alt="basket sign" />
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <img src={iconClose} alt="bars burger menu" />
                </button>
                </nav>
                <button className="nav-btn fix" onClick={showNavbar}>
                    <img src={iconBars} alt="bars burger menu" />
                </button>
            </div>
        </header>
    );
};

export default Navbar;
