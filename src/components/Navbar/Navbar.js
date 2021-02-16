import React from 'react';
import {Nav, NavLink, NavIcon, Bars} from './NavbarElements';

export const Navbar = ({toggle}) => {
    return (
        <div>
            <Nav>
                <NavLink to='/'>Travel</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </div>
    )
}
