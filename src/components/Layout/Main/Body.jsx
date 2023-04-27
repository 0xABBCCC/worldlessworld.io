import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;

    width: calc(100vw - 250px);

    background-color: yellow;
    overflow: auto;

    padding: 2rem;
`

const MainBody = ({ children }) => {
    return(
        <Wrapper id="mainBody">
            {children}
        </Wrapper>
    )
}

export default MainBody;