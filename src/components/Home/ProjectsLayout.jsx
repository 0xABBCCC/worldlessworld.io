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
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const ProjectLayout = ({ children }) => {
    return(
        <Wrapper>
            <Content>
                <ThinText>Open-source Projects</ThinText>
                <GridLayout>{children}</GridLayout>
            </Content>
        </Wrapper>
    )
}

export default ProjectLayout;