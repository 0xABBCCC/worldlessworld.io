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
    overflow: hidden;

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

const BoxImg = styled.div `
    height: 150px;
    transform: scale(1.5);
`

const NewTag = styled.div `
    position: absolute;
    top: -1rem;
    right: -1rem;
    padding: 8px 12px;
    background-color: #c084fc;
    color: #faf5ff;
    border-radius: 4px;
    font-weight: 800;

    @media (max-width: 1280px) {
        top: 0;
        right: 0;
    }

    z-index: 10;

`

const NewBorder = styled.div `
    position: absolute;
    border: thin solid #c084fc;
    background: transparent;
    height: 100%;
    width: 100%;
    z-index: 5;
`

const Project = ({ projectName, projectLanguage, projectDescription, projectUrl, projectImgUrl, isNew }) => {
    return(
        <Wrapper>
            {
                isNew ? (
                    <>
                        <NewTag>New!</NewTag>
                        <NewBorder></NewBorder>
                    </>
                ) : (
                    <></>
                )
            }
            {
                projectImgUrl ? (
                    <Box>
                        <BoxImg>
                        <img src={projectImgUrl} style={{objectFit: "cover", width: "100%", height: "100%"}}/>
                        </BoxImg>
                    </Box>
                ) : (
                    <></>
                )
            }
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