import pictureHero from '../assets/heroimage.svg';
import styled from 'styled-components';
import Button from './Button';

const Header = () => {
    return (
        <>
          <StyledHeroContainer>
            <StyledTextHeroBox>
                <StyledH3>Gothenburg winter guided tours</StyledH3>
                <StyledP>from £65 per person </StyledP>
                <Button>Book</Button>
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

@media (min-width: 1024px) {
    padding: 70px;
}
`

const StyledH3 = styled.h3`
font-family: Fahkwang;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 23px; 
letter-spacing: 1.636px;
color: #FFF;
`

const StyledP = styled.p`
color: #FFF;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px;
letter-spacing: 1.273px;
`