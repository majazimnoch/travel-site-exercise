import pictureHero from '../assets/heroimage.svg';
import styled, { css } from 'styled-components';
import Button from './Button';

const Header = () => {
    return (
        <>
          <StyledHeroContainer>
            <StyledTextHeroBox>
                <StyledH3>Gothenburg winter guided tours</StyledH3>
                <StyledP>from £65 per person </StyledP>
                <Button>Book experience</Button>
            </StyledTextHeroBox>
          </StyledHeroContainer>
        </>

    )

};

export default Header;

const StyledHeroContainer = styled.div`
    width: 100%;
    background-image: url(${pictureHero});
    height: 90vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;


@media (min-width: 1024px) {
    background-position: left;
}
`

const StyledTextHeroBox = styled.div`
display:flex;
flex-direction:column;
gap: 1rem;
padding: 19.94px;
width: 300px;


@media (min-width: 1024px) {
    padding: 70px;
    width: 1280px;
    flex-shrink: 0;
}
`

export const StyledH3 = styled.h3`
color: #FFF;
font-family: Mulish;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 23px; /* 127.778% */
letter-spacing: 1.636px;

${(styling) => styling.nav && css`
color: #000;
font-family: Fahkwang;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
letter-spacing: 1.273px;
`}

@media (min-width: 1024px) {
color: #FFF;
font-family: Fahkwang;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 127.778% */
letter-spacing: 1.636px;
}

`
export const StyledP = styled.p`
color: #FFF;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
letter-spacing: 1.273px;

@media (min-width: 1024px) {
color: #FFF;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
letter-spacing: 1.273px;
}

${(styling) => styling.black && css}
color: #222222;
`