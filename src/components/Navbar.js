import iconBars from '../assets/Hamburger.svg';
import iconClose from '../assets/Close.svg';
import styled from 'styled-components'

const Navbar = () => {
    return (
        <header>
            <h3>Scandinavian Adventures</h3>
            <nav>
                <a href="/experiences">Experiences</a>
                <a href="/company">Company</a>
                <a href="/support">Support</a>
                <StyledButton>
                    <img src={iconClose} alt="bars burger menu" />
                </StyledButton>
            </nav>
            <StyledButton>
                <img src={iconBars} alt="bars burger menu" />
            </StyledButton>
        </header>
    );
};

export default Navbar;

const StyledButton = styled.button`
background-color: transparent;
border: none;
`