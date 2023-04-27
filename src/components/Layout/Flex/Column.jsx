import styled from "styled-components";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const FlexColumn = ({ children }) => {
    return(
        <Wrapper>{children}</Wrapper>
    )
}

export default FlexColumn;