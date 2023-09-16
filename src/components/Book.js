import styled, { css } from "styled-components";
import SubIcon from "../assets/ButtonSubtract.svg";
import PlusIcon from "../assets/ButtonAdd.svg";
import pictureHero from "../assets/heroimage.svg";
import { StyledH3, StyledP, StyledPBold } from "./GlobalStyles";
import Button from "./Button";
import { Content, LiContainer, StyledLi } from "./Middle";
import React from "react";
import { useBasket } from "../contexts/basket";

const Book = () => {
  const {
    adultCount,
    increaseAdult,
    decreaseAdult,
    changeAdult,
    childrenCount,
    increaseChildren,
    decreaseChildren,
    changeChildren,
    total,
    setBooked,
  } = useBasket();

  return (
    <OverlayWrapper>
      <ImageAndBooking>
        <ImageDiv>
          {/* <StyledImageOverlay src={pictureHero} alt="city landscape" /> */}
        </ImageDiv>
        <BookingPart>
          <TextPartInsideCounting>
            <StyledH3 blackfont>
              Gothenburg winter <br /> guided tours
            </StyledH3>
            <StyledP black>From £65 per person</StyledP>
          </TextPartInsideCounting>
          <CountingBox>
            <TextPartInsideCounting gap>
              <CategoryDiv>
                <StyledP black>Adults</StyledP>
                <SymbolBox>
                  <StyledButtonNumbers onClick={decreaseAdult}>
                    <img src={SubIcon} alt="Icon Minus" />
                  </StyledButtonNumbers>
                  <StyledInput
                    type="text"
                    value={adultCount}
                    onChange={changeAdult}
                  />
                  <StyledButtonNumbers onClick={increaseAdult}>
                    <img src={PlusIcon} alt="Icon Plus" />
                  </StyledButtonNumbers>
                </SymbolBox>
              </CategoryDiv>
              <CategoryDiv>
                <StyledP black>Children</StyledP>
                <SymbolBox>
                  <StyledButtonNumbers onClick={decreaseChildren}>
                    <img src={SubIcon} alt="Icon Minus" />
                  </StyledButtonNumbers>
                  <StyledInput
                    type="text"
                    value={childrenCount}
                    onChange={changeChildren}
                  />
                  <StyledButtonNumbers onClick={increaseChildren}>
                    <img src={PlusIcon} alt="Icon Plus" />
                  </StyledButtonNumbers>
                </SymbolBox>
              </CategoryDiv>

              <StyledPBold>Total {total}</StyledPBold>
            </TextPartInsideCounting>
            <Button
              block
              space
              blackbackground
              onClick={() => adultCount > 0 && setBooked(true)}
            >
              Book Experience
            </Button>
          </CountingBox>
        </BookingPart>
      </ImageAndBooking>

      <InfoTextDiv>
        <StyledP black>
          Join a guided boat tour in the archipelago. M/S S:t Erik departs from
          Lilla Bommen and takes you through the Gothenburg harbor, past the
          Älvsborg Fortress and down towards the islands of Gothenburg
          archipelago. Enjoy a lovely boat sightseeing tour in the beautiful
          archipelago of Gothenburg. During the summer you can join the
          prestigious M/S S:t Erik on a guided cruise through the archipelago.
        </StyledP>

        <LiContainer padding>
          <StyledP black>
            {Content.map((point) => (
              <StyledLi key={point}>{point}</StyledLi>
            ))}
          </StyledP>
        </LiContainer>
      </InfoTextDiv>
    </OverlayWrapper>
  );
};

export default Book;

const OverlayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
  margin-top:0px;
`;
const ImageAndBooking = styled.div`
  margin-bottom: 7px;
  padding: 0 0px;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    padding: 0 40px;
    max-width: 1450px;
  }
`;
const ImageDiv = styled.div`
  width: 100%;
  background-image: url(${pictureHero});
  height: 60vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 1024px) {
    grid-area: 1 / 1 / 2 / 4;
  }
`;
const BookingPart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 35px 10px;
  justify-content: flex-start;

  @media (min-width: 1024px) {
    grid-area: 1 / 4 / 2 / 6;
    padding: 9px 10px;
  }
`;
const CountingBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media (min-width: 1024px) {
    padding: 0px;
  }
`;
const TextPartInsideCounting = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
  margin-bottom: 15px;

  ${(styling) =>
    styling.gap &&
    css`
      gap: 20px;
    `}
`;
const CategoryDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 25px;
`;
const InfoTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  margin-bottom: 25px;
  padding: 5px 40px;

  @media (min-width: 1024px) {
    margin-right: 30%;
    max-width: 1040px;
  }
`;

const SymbolBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 80px;
  height: 40px;
  flex-shrink: 0;
  padding: 10px;
  border: 0.9px solid #000000;
  font-size: 16px;
`;

const StyledButtonNumbers = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;