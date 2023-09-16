import { useRef, useState } from 'react';
import './NavbarStyling.css';
import iconBars from '../assets/Hamburger.svg';
import iconClose from '../assets/Close.svg';
import iconBasketEmpty from '../assets/emptybasket.svg'
import iconBasket from '../assets/basketorange.svg'
import { StyledH3 } from './GlobalStyles';
import { useBasket } from "../contexts/basket"
import { Link } from "react-router-dom"

const Navbar = () => {
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    // const open = useState(false);
    // const isOpen = open[0]
    // const setIsOpen = open[1]

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav");
    // }
    const showNavbar = () => {
        setIsOpen(!isOpen);
    };
    
    const { booked } = useBasket();
// object destructuring
    // const basket = useBasket();
    // const booked = basket.booked;

    return (
        <header>
            <StyledH3 nav><Link to="./">Scandinavian Adventures</Link></StyledH3>
            <div className="nav-container">
                <nav className={isOpen ? 'responsive_nav' : ''} ref={navRef}>
                <Link to="/experiences">Experiences</Link>
                <Link to="/company">Company</Link>
                <Link to="/support">Support</Link>
                <img src={booked ? iconBasket : iconBasketEmpty} alt="basket sign" />
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
