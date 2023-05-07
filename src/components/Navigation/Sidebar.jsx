import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { HeavyText, ThinText } from "../Layout/SignatureText";
import { NavLink, useLocation } from "react-router-dom";
import { VscLibrary, VscAccount, VscMenu, VscClose } from "react-icons/vsc";
import { BsFillPersonFill, BsFillMotherboardFill } from "react-icons/bs";
import { FiGithub, FiTwitter} from "react-icons/fi";
import { TbGlobeOff } from "react-icons/tb";

const Wrapper = styled.div `
    position: relative;

    height: 100vh;
    height: 100svh;
    max-height: 100vh;
    width: 250px;

    background-color: var(--gray-shade-600);

    padding: 2rem 0.625rem;
    gap: 1rem;

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

        padding: 1rem 0.625rem;
    }
`

const ToggleBtn = styled.button `

    position: fixed;
    top: 9999;
    right: 9999;
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-tint-100);
    color: var(--gray-tint-800);

    height: 42px;
    width: 42px;

    @media (max-width: 1280px) {
        top: 1rem;
        right: 1rem;
        z-index: 99;
    }
`

const LinkWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    font-size: 16px;
    font-weight: 200;
    transition: border 250ms background-color 300ms;

    border: thin solid var(--gray-tint-100);
    border-radius: 0.25rem;

    &.active:hover {
        background-color: none;
    }

    &:hover {
        background-color: var(--gray-shade-400);    }

    &.active {
        border: thin dashed var(--gray-tint-100);
        background-color: var(--gray-shade-200);
    }

    @media (max-width: 1280px) {

        background-color: transparent;

        &.active:hover {
            background-color: transparent;
        }

        &:hover {
            background-color: transparent;
        }

        &.active {
            border: thin dashed aqua;
            background-color: transparent;
        }
    }
`;

const FooterContainer = styled.div `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 2rem;
    background-color: var(--gray-shade-300);

    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 1280px) {
        padding: 1rem;
    }
`

const Link = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
  
    return (
        <StyledLink to={to} className={isActive ? 'active' : ''}>
            {children}
        </StyledLink>
    );
};

const Icon = styled.div `
    transform: rotate(180deg);
    height: 16px;
    width: 16px;
`

const Text = styled.h1 `
    font-size: 16px;
    font-weight: 300;
`

const LogoWrapper = styled.div `
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
`

const Sidebar = () => {
    const [isVisible, setVisible] = useState(false);

    function setVisibility() {
        setVisible(!isVisible);
    }

    return (
        <>
            <ToggleBtn onClick={setVisibility}>
                {isVisible ? (<VscClose style={{width: "24px", height: "24px"}}/>) : (<span><VscMenu style={{width: "24px", height: "24px"}}/></span>)}
            </ToggleBtn>
            <Wrapper visible={isVisible}>
                <LogoWrapper>
                    <Icon>
                        <TbGlobeOff/>
                    </Icon>
                    <Text>Worldless World</Text>
                </LogoWrapper>
                <LinkWrapper>
                    <Link to="/">
                        /projects
                    </Link>
                    <Link to="/about">
                        /about
                    </Link>
                </LinkWrapper>
                <FooterContainer>
                    <a href="https://github.com/0xABBCCC/" target="_blank" rel="noreferrer"><FiGithub style={{ width: "22px", height: "22px" }} /></a>
                    <a href="https://twitter.com/worldlessworld" target="_blank" rel="noreferrer"><FiTwitter style={{ width: "22px", height: "22px" }} /></a>

                </FooterContainer>
            </Wrapper>
        </>
    )
}

export default Sidebar;