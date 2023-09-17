import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./CarouselStyling.css";
import Carousel1 from "../../assets/carousel-1.png";
import Carousel2 from "../../assets/carousel-2.png";
import Carousel3 from "../../assets/carousel-3.png";
import Carousel4 from "../../assets/carousel-4.png";
import styled from "styled-components";
import {
  StyledGrayHeader,
  StyledGrayP,
  StyledH3,
  StyledP,
  StyledPHeader,
} from "../GlobalStyles";

const DesktopView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Carousel = () => {
  const images = [Carousel1, Carousel2, Carousel3, Carousel4];

  const isDesktop = window.innerWidth >= 1024;

  if (isDesktop) {
    return (
      <GrayBox>
        <GrayBoxTextBox>
          <StyledGrayHeader gray>Adventure awaits out there</StyledGrayHeader>
          <StyledGrayP>
            Get out and experience Scandinavian way of living
          </StyledGrayP>
        </GrayBoxTextBox>
        <DesktopView>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Stockholm archipelago</StyledH4>
              <StyledPHeader>From £50 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Destination Stockholm</StyledH4>
              <StyledPHeader>Guided tours from £50 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Southern Sweden</StyledH4>
              <StyledPHeader>Guided tours from £50 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[3]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Destination Gotland</StyledH4>
              <StyledPHeader>From £120 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
        </DesktopView>
      </GrayBox>
    );
  }

  return (
    <>
      <GrayBox>
        <GrayBoxTextBox>
          <StyledH3 gray>Adventure awaits out there</StyledH3>
          <StyledP>Get out and experience Scandinavian way of living</StyledP>
        </GrayBoxTextBox>
        <Slide>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[0]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Stockholm archipelago</StyledH4>
              <StyledPHeader>From £50 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[1]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Destination Stockholm</StyledH4>
              <StyledPHeader>Guided tours from £50 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[2]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Southern Sweden</StyledH4>
              <StyledPHeader>Guided tours from £50 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
          <div className="each-slide-effect">
            <div style={{ backgroundImage: `url(${images[3]})` }}></div>
            <BackgroundSlider>
              <StyledH4>Destination Gotland</StyledH4>
              <StyledPHeader>From £120 per person</StyledPHeader>
              <ButtonCarousel block space>
                Book Experience
              </ButtonCarousel>
            </BackgroundSlider>
          </div>
        </Slide>
      </GrayBox>
    </>
  );
};

export default Carousel;

const StyledH4 = styled.h4`
  color: #fff;
  font-family: Fahkwang;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
  letter-spacing: 1.273px;
`;

const BackgroundSlider = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: left;
  padding: 25px;
  gap: 10px;
  height: 100%; /* Set a fixed height */

  > * {
    flex-grow: 1; /* Allow the elements to grow and take up available space */
  }
`;

const GrayBox = styled.div`
  background-color: #efeded;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
  gap: 10px;
`;

const GrayBoxTextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;
`;

export const ButtonCarousel = styled.button`
height: 36px;
flex-shrink: 0;
color: #000;
text-align: center;
font-family: Fahkwang;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
letter-spacing: 1.273px;
cursor: pointer;
border: none;
display: block;
width:100%;


`