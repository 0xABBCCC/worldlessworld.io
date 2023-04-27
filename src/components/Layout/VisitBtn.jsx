import styled from "styled-components";
import {VscLinkExternal} from "react-icons/vsc"

const Wrapper = styled.a `
    background-color: blue;
    padding: 0.5rem 2rem;

    &:hover {
        background-color: red;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    border-radius: 0.25rem;
`

const Text = styled.span `
    font-size: 14px;
    font-weight: 400;
`

const ExternalBtn = ({ linkTo }) => {
    return(
        <Wrapper href={linkTo} target="_blank" rel="noreferrer">
            <Text>Visit</Text>
            <VscLinkExternal style={{height: "14px", width: "14px"}}/>
        </Wrapper>
    )
}

export default ExternalBtn;