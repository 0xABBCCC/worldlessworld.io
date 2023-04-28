import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
    position: relative;

    width: calc(100vw - 250px);
    max-height: 100vh;
    overflow: auto;

    padding: 2rem;

    animation: ${fadeIn} 500ms;

    display: flex;
    flex-direction:column;
    gap: 2rem;

    @media (max-width: 1280px) {

      padding: 1rem;

      height: 100vh;
      height: 100svh;
      width: 100vw;

      gap: 1rem;

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