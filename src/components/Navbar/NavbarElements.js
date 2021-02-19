import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'; 
// import {FaPizzaSlice} from 'react-icons/fa';
import {FaPlane} from 'react-icons/fa';

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
    background: transparent;
    `

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
    `

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    right: 0;
    cursor: pointer;
    color: white; 

        p {
            transform: translate(-175%, 100%);
            font-weight: bold;
        }
`

export const Bars = styled(FaPlane)`
    font-size: 2rem;
    transform: rotate(-45deg);
`