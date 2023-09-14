import styled from 'styled-components';
import GitIcon from '../assets/githubb.png';
import LiIcon from '../assets/linkedinb.png';

const Welcome = () => {
    return (
       <FooterWrapper>
         <p>Website made by Maja Zimnoch.</p>
         <IconsDiv>

         <a href="https://github.com/majazimnoch" target="_blank" rel="noopener noreferrer">
          <StyledImg src={GitIcon} alt="Git icon" /></a>

         <a href="https://www.linkedin.com/in/majazimnoch/" target="_blank" rel="noopener noreferrer">
          <StyledImg src={LiIcon} alt="LinkedIn icon" /></a>

         </IconsDiv>
         <p>Design & Concept by AKQA. This is a coding task. September 2023</p>
       </FooterWrapper>
    )
}

export default Welcome;

const FooterWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin: 25px;
font-family: Mulish;
font-size: 14px;
gap: 7px;
`

const IconsDiv = styled.div`
display: flex;
flex-direction: row;
gap: 15px;
`

const StyledImg = styled.img`
height: 20px;
transition: transform .1s;

&:hover {
  opacity: 0.5;
  transform: scale(1.2);
}
`