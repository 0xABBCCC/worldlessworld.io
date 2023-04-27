import styled from "styled-components";

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
`

const CardLayout = ({ children }) => {
    return(
        <Wrapper>{children}</Wrapper>
    )
}

export default CardLayout;