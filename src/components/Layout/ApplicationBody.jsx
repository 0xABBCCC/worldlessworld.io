import styled from "styled-components";

const Wrapper = styled.div`
    position: relative;

    height: 100vh;
    height: 100svh;
    max-height: 100vh;

    width: 100vw;
    max-width: 100vw;
`

const ApplicationBody = ({ children }) => {
    return(
        <Wrapper id="applicationBody">
            {children}
        </Wrapper>
    )
}

export default ApplicationBody;