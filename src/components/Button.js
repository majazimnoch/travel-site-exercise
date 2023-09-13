import styled, { css } from 'styled-components';

export const Button = styled.button`
    width: 201px;
    height: 55px;
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

    &:hover {
    }

    ${(styling) => styling.blackbackground && css`
    background-color:#000;
    color: #FFF;`}

    ${(styling) => styling.block && css`
    display: block;
    width:100%;`}
    `
export default Button;