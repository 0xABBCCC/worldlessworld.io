import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;

    width: calc(100vw - 250px);

    background-color: yellow;
    overflow: auto;

    padding: 2rem;

    @media (max-width: 1280px) {

        padding: 1rem;

        height: 100vh;
        height: 100svh;
        max-height: 100vh;
        width: 100vw;
    }
`

const MainBody = ({ children }) => {
    return(
        <Wrapper id="mainBody">
            {children}
        </Wrapper>
    )
}

export default MainBody;