import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { HeavyText, ThinText } from "../Layout/SignatureText";
import { NavLink, useLocation } from "react-router-dom";
import { VscLibrary, VscAccount } from "react-icons/vsc";
import { BsFillPersonFill, BsFillMotherboardFill } from "react-icons/bs";
import { FiGithub, FiTwitter} from "react-icons/fi"

const Wrapper = styled.div `
    position: relative;

    height: 100vh;
    height: 100svh;
    max-height: 100vh;
    width: 250px;

    background-color: yellowgreen;

    padding: 2rem;

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

        padding: 1rem;
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
    padding: 0.5rem 0rem;
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

const FooterContainer = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    border-top: thin solid blanchedalmond;

    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 1280px) {
        padding: 1rem;
    }
`

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
                        My Work
                    </Link>
                    <Link to="/about">
                        About me
                    </Link>
                </LinkWrapper>
                <FooterContainer>
                    <a href="https://github.com/0xABBCCC/" target="_blank" rel="noreferrer"><FiGithub style={{ width: "24px", height: "24px" }} /></a>
                    <a href="https://twitter.com/worldlessworld" target="_blank" rel="noreferrer"><FiTwitter style={{ width: "24px", height: "24px" }} /></a>
                </FooterContainer>
            </Wrapper>
        </>
    )
}

export default Sidebar;