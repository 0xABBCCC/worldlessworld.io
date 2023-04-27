import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div `
    position: relative;

    height: 100vh;
    height: 100svh;
    max-height: 100vh;
    width: 250px;

    background-color: yellowgreen;

    @media (max-width: 1280px) {
        display: ${props => props.visible ? "flex" : "none"};

        position: fixed;

        top: 0;
        left: 0;

        height: 100vh;
        height: 100svh;
        max-height: 100vh;
        width: 100vw;

        overflow: auto;
        z-index: 50;
    }
`

const ToggleBtn = styled.button `

    position: fixed;
    top: 9999;
    right: 9999;

    @media (max-width: 1280px) {
        top: 1rem;
        right: 1rem;
        z-index: 99;
    }
`

const Sidebar = () => {
    const [isVisible, setVisible] = useState(false);

    function setVisibility() {
        setVisible(!isVisible);
    }

    return(
        <>
            <ToggleBtn onClick={setVisibility}>
                {isVisible ? (<span>Close</span>) : (<span>Open</span>)}
            </ToggleBtn>
            <Wrapper visible={isVisible}>Sidebar</Wrapper>
        </>
    )
}

export default Sidebar;