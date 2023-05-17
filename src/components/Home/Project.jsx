import styled from "styled-components";
import ExternalBtn from "../Layout/VisitBtn";

const Wrapper = styled.div `
    position: relative;
    display: grid; 
    /* grid-template-columns: 150px 150px 1fr 150px; */
    grid-template-columns: 1fr;
    border: thin solid var(--gray-shade-100);
    background-color: var(--gray-shade-800);

    @media (max-width: 1280px) {
        grid-template-columns: 1fr;
    }

`

const Box = styled.div `
    padding: 1rem;

    &:nth-child(odd) {
        /* border-left: thin solid var(--gray-shade-100);
        border-right: thin solid var(--gray-shade-100); */

        border-left: none;
        border-right: none;
        border-top: thin solid var(--gray-shade-100);
        border-bottom: thin solid var(--gray-shade-100);

        @media (max-width: 1280px) {
            border-left: none;
            border-right: none;
            border-top: thin solid var(--gray-shade-100);
            border-bottom: thin solid var(--gray-shade-100);
        }

    }

    &:last-child {
        border: none;

        @media (max-width: 1280px) {
            background-color: var(--gray-shade-800);
        }
    }
`

const HeavyText = styled.div `
    font-weight: 600;
    font-size: 14px;
`

const ThinText = styled.div `
    font-weight: 300;
    font-size: 16px;
`

const Project = ({ projectName, projectLanguage, projectDescription, projectUrl }) => {
    return(
        <Wrapper>
            <Box>
                <HeavyText>Name</HeavyText>
                <ThinText>{projectName}</ThinText>
            </Box>
            <Box>
                <HeavyText>Language</HeavyText>
                <ThinText>{projectLanguage}</ThinText>
            </Box>
            <Box>
                <HeavyText>Description</HeavyText>
                <ThinText style={{minHeight: "64px"}}>{projectDescription}</ThinText>
            </Box>
            {
                projectUrl ? (
                    <Box>
                        <ExternalBtn linkTo={projectUrl}/>
                    </Box>
                ) : (
                    <> </>
                )
            }
        </Wrapper>
    )
}

export default Project;