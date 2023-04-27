import styled from "styled-components";

const Wrapper = styled.div `
    position: relative;

    height: 100vh;
    height: 100svh;
    max-height: 100vh;
    width: 250px;

    background-color: yellowgreen;
`

const Sidebar = () => {
    return(
        <Wrapper id="sidebar">Sidebar</Wrapper>
    )
}

export default Sidebar;