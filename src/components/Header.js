// import { Link } from "react-router-dom";
import pictureHero from "../assets/heroimage.svg";
import styled from "styled-components";
import Button from "./Button";
import { StyledH3, StyledPHeader } from "./GlobalStyles";
import Overlay from "./Overlay";
import { useState } from "react";
import Book from "./Book";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledHeroContainer>
        <StyledTextHeroBox>
          <StyledH3>Gothenburg winter guided tours</StyledH3>
          <StyledPHeader>from £65 per person </StyledPHeader>
          {/* <Button>
            <Link to="/book">Book experience</Link>
          </Button> */}
          <Button onClick={toggleOverlay}>Book Experience</Button>

          <Overlay isOpen={isOpen} onClose={toggleOverlay}>
            <Book />
          </Overlay>
        </StyledTextHeroBox>
      </StyledHeroContainer>
    </>
  );
};

export default Header;

const StyledHeroContainer = styled.div`
  width: 100%;
  background-image: url(${pictureHero});
  height: 90.5vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    background-position: left;
  }
`;

const StyledTextHeroBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 19.94px;
  width: 300px;

  @media (min-width: 1024px) {
    padding: 70px;
    width: 1280px;
    flex-shrink: 0;
  }
`;
