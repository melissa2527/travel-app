import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.div`
    position: fixed;
    z-index: 1;
    width: 350px;
    height: 100%;
    background: transparent;
    display: grid;
    align-items: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};

    @media screen and (max-width: 400px) {
        width: 100%;
    }
`

export const CloseIcon = styled(FaTimes)`
    color: #000;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 100px);
    text-align: center;
    background-color: #ffc500;
    height: 100vh;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 100px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    margin: 4em auto;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: #000;

    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
        transform: scale(1.2);
    }
`

export const BtnWrap = styled.div`
    display: flex;
    height: 3em;
    margin-top: 3em;
    justify-content: center;
`

export const SidebarRoute = styled(Link)`
    background: #e31837;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 1rem;
    color: #fff;
    border: none;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transition: 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        transform: scale(1.2);
    }
`