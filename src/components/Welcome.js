import styled from 'styled-components';
import SubIcon from '../assets/ButtonSubtract.svg';
import PlusIcon from '../assets/ButtonAdd.svg';
import pictureHero from '../assets/heroimage.svg';
import { StyledH3, StyledP } from './GlobalStyles';

const Welcome = () => {
    return (
       <OverlayWrapper>
          <div>
            <img src={pictureHero} alt="city landscape" />
            <BookingPart>
              <StyledH3>Gothenburg winter guided tours</StyledH3>
              <StyledP black>From £65 per person</StyledP>
              <CountingBox>
                <StyledP black>Adults</StyledP>
                <SymbolBox>
                  <img src={SubIcon} alt="Icon Minus" />
                  <NumberBox><StyledP black>1</StyledP></NumberBox>
                  <img src={PlusIcon} alt="Icon Plus" />
                </SymbolBox>

                <StyledP black>Children</StyledP>
                <SymbolBox>
                  <img src={SubIcon} alt="Icon Minus" />
                  <NumberBox><StyledP black>1</StyledP></NumberBox>
                  <img src={PlusIcon} alt="Icon Plus" />
                </SymbolBox>

                <StyledP bold>Total £ </StyledP>

              </CountingBox>
              <StyledP black>Join a guided boat tour in the archipelago. M/S S:t Erik departs from Lilla Bommen and takes you through the Gothenburg harbor, past the Älvsborg Fortress and down towards the islands of Gothenburg archipelago. Enjoy a lovely boat sightseeing tour in the beautiful archipelago of Gothenburg. During the summer you can join the prestigious M/S S:t Erik on a guided cruise through the archipelago.
              </StyledP>
            </BookingPart>
            <p>
              Join a guided boat tour in the archipelago. M/S S:t Erik departs from Lilla Bommen and takes you through the Gothenburg harbor, past the Älvsborg Fortress and down towards the islands of Gothenburg archipelago. Enjoy a lovely boat sightseeing tour in the beautiful archipelago of Gothenburg. During the summer you can join the prestigious M/S S:t Erik on a guided cruise through the archipelago.
            </p>
            <p> – Exciting 5-hour tour
                – Track and find wild moose
                – Hike through boreal forest
                – Eat by a secluded forest lake
                – Chance to see wolves, foxes and lynx
            </p>
          </div>
       </OverlayWrapper>
    );
};

export default Welcome;

const OverlayWrapper = styled.div`
display: flex;
flex-direction: column;
`
const BookingPart = styled.div`
display: flex;
flex-direction: column;
`
const CountingBox = styled.div`
display: flex;
flex-direction: column;
`
const SymbolBox = styled.div`
display: flex;
flex-direction: row;
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