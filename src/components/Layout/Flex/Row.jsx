import styled from "styled-components";

const Wrapper = styled.div `
    display: flex;
    flex-direction: row;
`

const FlexRow = ({ children }) => {
    return(
        <Wrapper>{children}</Wrapper>
    )
}

export default FlexRow;