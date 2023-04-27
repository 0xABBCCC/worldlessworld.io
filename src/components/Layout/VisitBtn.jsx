import styled from "styled-components";
import {VscLinkExternal} from "react-icons/vsc"

const Wrapper = styled.a `
    background-color: blue;
    padding: 0.75rem 3rem;

    &:hover {
        background-color: red;
    }

    display: flex;
    align-items: center;
    gap: 0.25rem;
`

const Text = styled.span `
    font-size: 16px;
    font-weight: 400;
`

const ExternalBtn = ({ linkTo }) => {
    return(
        <Wrapper href={linkTo} target="_blank" rel="noreferrer">
            <Text>Visit</Text>
            <VscLinkExternal style={{height: "16px", width: "16px"}}/>
        </Wrapper>
    )
}

export default ExternalBtn;