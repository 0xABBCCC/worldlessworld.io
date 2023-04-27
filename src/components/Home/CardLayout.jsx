import styled from "styled-components";
import { HeavyText, ThinText } from "../Layout/SignatureText";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const GridWrapper = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 1rem;
    }
`

const Content = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const CardLayout = ({ children }) => {
    return(
        <Wrapper>
            <HeavyText>Projects I've worked on</HeavyText>
            <Content>
                <ThinText>Projects</ThinText>
                <GridWrapper>{children}</GridWrapper>
            </Content>
        </Wrapper>
    )
}

export default CardLayout;