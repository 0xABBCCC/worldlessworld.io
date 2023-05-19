import styled from "styled-components";
import { ThinText } from "../Layout/SignatureText";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Content = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const GridLayout = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    @media (max-width: 1280px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const ProjectLayout = ({ children }) => {
    return(
        <Wrapper>
            <Content>
                <ThinText>Open-source projects</ThinText>
                <GridLayout>{children}</GridLayout>
            </Content>
        </Wrapper>
    )
}

export default ProjectLayout;