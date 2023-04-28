import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { HeavyText, ThinText } from "../Layout/SignatureText";
import { NavLink, useLocation } from "react-router-dom";
import { VscLibrary, VscAccount } from "react-icons/vsc";
import { BsFillPersonFill, BsFillMotherboardFill } from "react-icons/bs";

const Wrapper = styled.div `
    position: relative;

    height: 100vh;
    height: 100svh;
    max-height: 100vh;
    width: 250px;

    background-color: yellowgreen;

    padding: 0.625rem;

    display: flex;
    flex-direction: column;

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
        top: 0.625rem;
        right: 0.625rem;
        z-index: 99;
    }
`

const LogoWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const LinkWrapper = styled.div `
    display: flex;
    flex-direction: column;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;

    font-size: 16px;

    &.active:hover {
        background-color: none;
    }

    &:hover {
        background-color: purple;
    }

    &.active {
        background-color: red;
    }
`;

const Link = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
        <StyledLink to={to} className={isActive ? 'active' : ''}>
            {children}
        </StyledLink>
    );
};

const Sidebar = () => {
    const [isVisible, setVisible] = useState(false);

    function setVisibility() {
        setVisible(!isVisible);
    }

    return (
        <>
            <ToggleBtn onClick={setVisibility}>
                {isVisible ? (<span>Close</span>) : (<span>Open</span>)}
            </ToggleBtn>
            <Wrapper visible={isVisible}>
                <LogoWrapper>
                    <ThinText>WorldLessWorld</ThinText>
                </LogoWrapper>
                <LinkWrapper>
                    <Link to="/">
                        <BsFillMotherboardFill style={{width: "24px", height: "24px"}}/>
                        Work
                    </Link>
                    <Link to="/about">
                        <BsFillPersonFill style={{width: "24px", height: "24px"}}/>
                        About
                    </Link>
                </LinkWrapper>
            </Wrapper>
        </>
    )
}

export default Sidebar;