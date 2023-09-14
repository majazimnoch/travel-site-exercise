import styled, { css } from 'styled-components';
import pictureForest from '../assets/forest.svg';
import pictureArchipelago from '../assets/archipelago.svg';
import { StyledH3, StyledP } from './GlobalStyles';
import Button from './Button';

const Content = [
    "-Exciting 5-hour tour",
    "-Track and find wild moose",
    "-Hike through boreal forest",
    "-Eat by a secluded forest lake",
    "-Chance to see wolves, foxes and lynx"
];

const Middle = () => {
    return (
        <MiddleWrapper>
            <MiddlePictureBox>
                <PictureForest>
                    <StyledH3>Moose safari in Central Sweden</StyledH3>
                </PictureForest>
                <LiContainer>
                    <StyledP black>
                    {Content.map(point => (
                        <StyledLi key={point}>{point}</StyledLi>
                    ))}
                    </StyledP>
                </LiContainer>
                <PContainer>
                    <StyledP>From £150 per person</StyledP>
                </PContainer>
                <Button blackbackground block>Book experience</Button>
            </MiddlePictureBox>
            <MiddlePictureBoxBelow>
                <PictureForest secondpicture longtext>
                    <StyledH3>Brunch at the archipelagos of Gothenburg</StyledH3>
                </PictureForest>
                <LiContainer>
                    <StyledP black>
                    Join a guided boat tour in the archipelago. M/S S:t Erik departs from Lilla Bommen and takes you through the Gothenburg harbor, past the Älvsborg Fortress and down towards the islands of Gothenburg archipelago. Enjoy a lovely boat sightseeing tour in the beautiful archipelago of Gothenburg. During the summer you can join the prestigious M/S S:t Erik on a guided cruise through the archipelago.
                    </StyledP>
                </LiContainer>
                <PContainer>
                    <StyledP>From £45 per person</StyledP>
                </PContainer>
                <Button blackbackground block>Book experience</Button>
            </MiddlePictureBoxBelow>
            
        </MiddleWrapper>
    );
};

export default Middle;

const MiddleWrapper = styled.section`
display: flex;
flex-direction: column;
margin: 40px 20px;
gap: 40px;

@media (min-width: 1024px) {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
gap: 20px;
margin: 40px;

}
`
const PictureForest= styled.section`
background-image: url(${pictureForest});
height: 320px;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 15px 150px 15px 20px;

${(styling) => styling.longtext && css`
padding: 15px 30px 15px 20px;
`}

${(styling) => styling.secondpicture && css`
background-image: url(${pictureArchipelago})`}
`
const LiContainer = styled.div`
padding: 20px;`

const StyledLi = styled.li`
list-style: none;`

const PContainer = styled.div`
padding: 10px 20px 19px 20px;
margin-bottom: 16px;
`
const MiddlePictureBox = styled.div`

display: flex;
flex-direction: column;

@media (min-width: 1024px) {
grid-area: 1 / 1 / 2 / 3;
justify-content: space-between;
}
`
const MiddlePictureBoxBelow = styled.div`
display: flex;
flex-direction: column;

@media (min-width: 1024px) {
grid-area: 1 / 3 / 2 / 6;
justify-content: space-between;
}
`