import styled, { css } from 'styled-components';


export const StyledH3 = styled.h3`
color: #FFF;
font-family: Mulish;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 23px; /* 127.778% */
letter-spacing: 1.636px;

${(styling) => styling.blackfont && css`
color: #000;
`}

${(styling) => styling.nav && css`
color: #000;
font-family: Fahkwang;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 18px; /* 128.571% */
letter-spacing: 1.273px;
`}

${(styling) => styling.gray && css`
color: #222;
text-align: center;
font-family: Mulish;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: 23px; /* 127.778% */
letter-spacing: 1.636px;
`}

@media (min-width: 1024px) {
color: #FFF;
font-family: Fahkwang;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 23px; /* 127.778% */
letter-spacing: 1.636px;

${(styling) => styling.blackfont && css`
color: #000;
`}
}
`
export const StyledPBold = styled.p`
color: #222;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 18px; /* 128.571% */
letter-spacing: 1.273px;
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

@media (min-width: 1024px) {
color: #222;
}
`
export const StyledPHeader = styled.p`
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
`

export const StyledGrayHeader = styled.h3`
color: #222;
text-align: center;
font-family: Mulish;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: 23px; /* 127.778% */
letter-spacing: 1.636px;
`
export const StyledGrayP = styled.p`
color: #222;
text-align: center;
font-family: Mulish;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 18px; /* 128.571% */
letter-spacing: 1.273px;
`