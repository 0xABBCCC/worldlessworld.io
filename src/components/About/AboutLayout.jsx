import styled from "styled-components";
import { HeavyText, ThinText } from "../Layout/SignatureText";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 1280px) {
        gap: 1rem;
    }
`

const Header = styled.div `
`

const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Content = styled.div `
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`

const Paragraph = styled.p `
    max-width: 600px;
`

const ParLink = styled.a `
    font-weight: 600;
    text-decoration: underline dashed yellow 1px;
    text-underline-offset: 4px;
`

const AboutLayout = () => {
    return(
        <Wrapper>
            <Header>
                <HeavyText>About me</HeavyText>
            </Header>
            <Container>
                <Content>
                    <ThinText>Who am I</ThinText>
                    <Paragraph>
                        I'm a 19-year-old full stack developer with experience in React and NodeJS.
                        In addition to my programming skills, I'm also competent in drawing, using Photoshop for compositions, and web designing with a focus on UI/UX.
                        I've developed a good balance between technical expertise and design sense, which I believe could be valuable in a professional setting.
                    </Paragraph>
                </Content>
                <Content>
                    <ThinText>Contact</ThinText>
                    <Paragraph>
                        If you're curious to learn more, I'd be thrilled to chat about how my skills can contribute to different projects or initiatives.
                        The best way to reach me is through Twitter DMs - just <ParLink href="https://twitter.com/worldlessworld" target="_blank" rel="noreferrer">click here</ParLink> to visit my profile, and I'll get back to you as soon as I can!
                    </Paragraph>
                </Content>
                <Content>
                    <ThinText>ALSO!</ThinText>
                    <Paragraph>
                        You can view the page's source code by <ParLink href="https://github.com/0xABBCCC/worldlessworld.io" target="_blank" rel="noreferrer">clicking here</ParLink>.
                    </Paragraph>
                </Content>
            </Container>
        </Wrapper>
    )
}

export default AboutLayout;