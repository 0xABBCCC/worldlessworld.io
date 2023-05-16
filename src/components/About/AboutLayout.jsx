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
    line-height: 24px;
`

const ParLink = styled.a `
    font-weight: 600;
    text-decoration: underline dashed var(--gray-tint-400) 1px;
    text-underline-offset: 4px;
    color: var(--gray-tint-900);
`

const Highlight = styled.span `
    font-weight: 600;
    color: var(--gray-tint-900);
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
                        I'm a 19-year-old <Highlight>full stack developer</Highlight> with experience in <Highlight>React.js</Highlight> and <Highlight>Node.js</Highlight>.
                        In addition to my programming skills, I'm also competent in drawing, using <Highlight>Photoshop</Highlight> for compositions, and <Highlight>web designing</Highlight> with a focus on <Highlight>UI/UX</Highlight> using tools such as <Highlight>Figma, ADOBE XD</Highlight> or plain <Highlight>HTML/CSS</Highlight>.
                        I've developed a good balance between technical expertise and design sense, which I believe could be valuable in a professional setting.
                        Moreover, I have knowledge and experience in conducting <Highlight>UI/UX research</Highlight> and designing for both Web 2 and Web 3 projects.
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