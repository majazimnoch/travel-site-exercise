import styled, { css } from 'styled-components';
import SubIcon from '../assets/ButtonSubtract.svg';
import PlusIcon from '../assets/ButtonAdd.svg';
import pictureHero from '../assets/heroimage.svg';
import { StyledH3, StyledP, StyledPBold } from './GlobalStyles';
import Button from './Button';

const Welcome = () => {
    return (
       <OverlayWrapper>
          <div>
            <StyledImageOverlay src={pictureHero} alt="city landscape" />
            <BookingPart>
              <TextPartInsideCounting>
                <StyledH3 blackfont>Gothenburg winter <br /> guided tours</StyledH3>
                <StyledP black>From £65 per person</StyledP>
              </TextPartInsideCounting>
              <CountingBox>
                <TextPartInsideCounting gap>
                  <CategoryDiv>
                    <StyledP black>Adults</StyledP>
                    <SymbolBox>
                      <img src={SubIcon} alt="Icon Minus" />
                      <NumberBox><StyledP black>1</StyledP></NumberBox>
                      <img src={PlusIcon} alt="Icon Plus" />
                    </SymbolBox>
                  </CategoryDiv>
                  <CategoryDiv>
                    <StyledP black>Children</StyledP>
                    <SymbolBox>
                      <img src={SubIcon} alt="Icon Minus" />
                      <NumberBox><StyledP black>1</StyledP></NumberBox>
                      <img src={PlusIcon} alt="Icon Plus" />
                    </SymbolBox>
                  </CategoryDiv>

                  <StyledPBold>Total £ </StyledPBold>

                </TextPartInsideCounting>
                <Button block space blackbackground>Book Experience</Button>

              </CountingBox>
              <StyledP black>Join a guided boat tour in the archipelago. M/S S:t Erik departs from Lilla Bommen and takes you through the Gothenburg harbor, past the Älvsborg Fortress and down towards the islands of Gothenburg archipelago. Enjoy a lovely boat sightseeing tour in the beautiful archipelago of Gothenburg. During the summer you can join the prestigious M/S S:t Erik on a guided cruise through the archipelago.
              </StyledP>
              <StyledP>
                – Exciting 5-hour tour
                – Track and find wild moose
                – Hike through boreal forest
                – Eat by a secluded forest lake
                – Chance to see wolves, foxes and lynx
            </StyledP>
            </BookingPart>
          </div>
       </OverlayWrapper>
    );
};

export default Welcome;
const StyledImageOverlay = styled.img`
height: 375px;
flex-shrink: 0;
`
const OverlayWrapper = styled.div`
display: flex;
flex-direction: column;
`
const BookingPart = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
padding: 35px 20px;
`
const CountingBox = styled.div`
display: flex;
flex-direction: column;
`
const TextPartInsideCounting = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 0 20px;
margin-bottom: 15px;

${(styling) => styling.gap && css`
gap: 20px;;
`}

`
const CategoryDiv = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
margin-bottom: 25px;
`

const SymbolBox = styled.div`
display: flex;
flex-direction: row;
gap:10px;
`
const NumberBox = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border: .9px black solid;
width: 80px;
height: 40px;
flex-shrink: 0;
`