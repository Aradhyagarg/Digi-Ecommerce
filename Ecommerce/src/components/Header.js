import React from 'react'
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from './Nav';
const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./images/VIBET.png" alt="my logo image" height={60} width={300}/>
            </NavLink>
            <Nav/>
        </MainHeader>
    );
};

const MainHeader = styled.header`
padding: 0 6rem;
height: 8rem;
background-color: #282a35;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
    height: 5rem;
}
`;
export default Header