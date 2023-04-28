import styled from "styled-components";
import ExternalBtn from "../Layout/VisitBtn";

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    background-color: aquamarine;

    transition: background-color 100ms ease-in-out;

    /* &:hover > div {
        background-color: red;
        transition: background-color 100ms ease-in;
    } */

`

const Header = styled.div  `
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: thin solid red;

    @media (max-width: 1280px) {
        gap: 1rem;
        flex-direction: column;
    }
`

const HeaderContent = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
`

const JobImg = styled.img `
    width: 65px;
    height: 65px;
    flex: 0 0 65px;

    border-radius: 1rem;

    background-size: fill;
    background-repeat: no-repeat;
    background-position: center;

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`

const JobInfoWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const Content = styled.div `
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const ContentLayout = styled.div `
    display: flex;
    flex-direction: column;
`

const TextHeavy = styled.h1 `
    font-size: 18px;
    font-weight: 600px;
`

const TextThin = styled.h2 `
    font-size: 16px;
    font-weight: 400;
`

const JobCard = ({ jobTitle, jobTag, jobIcon, jobRole, jobWhat, jobHow, jobLink }) => {
    return(
        <Wrapper>
            <Header>
                <HeaderContent>
                    <JobImg src={jobIcon} />
                    <JobInfoWrapper>
                        <TextHeavy>{jobTitle}</TextHeavy>
                        <TextThin>{jobTag}</TextThin>
                    </JobInfoWrapper>
                </HeaderContent>
                {
                    jobLink ? (
                        <ExternalBtn linkTo={jobLink} /> 
                    ) : (
                        <></>
                    )
                }
            </Header>
            <Content>
                {
                    jobRole ? (
                        <ContentLayout>
                            <TextHeavy>Role</TextHeavy>
                            <TextThin>{jobRole}</TextThin>
                        </ContentLayout>
                    ) : (
                        <></>
                    )
                }
                {
                    jobWhat ? (
                        <ContentLayout>
                            <TextHeavy>What I did</TextHeavy>
                            <TextThin>{jobWhat}</TextThin>
                        </ContentLayout>
                    ) : (
                        <></>
                    )
                }
                {
                    jobHow ? (
                        <ContentLayout>
                            <TextHeavy>How I did it</TextHeavy>
                            <TextThin>{jobHow}</TextThin>
                        </ContentLayout>
                    ) : (
                        <></>
                    )
                }
            </Content>
        </Wrapper>
    )
}

export default JobCard;