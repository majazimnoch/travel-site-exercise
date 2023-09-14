import Header from "./Header";
import Navbar from "./Navbar";
import styled from "styled-components";

const Top = () => {
    return(
        <TopWrapper>
            <Navbar />
            <Header />
        </TopWrapper>
    );
};

export default Top;

const TopWrapper = styled.div`
height: 100vh;
`