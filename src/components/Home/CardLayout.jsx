import styled from "styled-components";

const Wrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const CardLayout = ({ children }) => {
    return(
        <Wrapper>{children}</Wrapper>
    )
}

export default CardLayout;