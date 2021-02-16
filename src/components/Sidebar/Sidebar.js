import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, BtnWrap, SidebarRoute} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
           <Icon onClick={toggle}>
               <CloseIcon onClick={toggle}/>
            </Icon> 
            <SidebarMenu>
                <SidebarLink to='/'>Greece</SidebarLink>
                <SidebarLink to='/'>Spain</SidebarLink>
                <SidebarLink to='/'>France</SidebarLink>
                <SidebarLink to='/'>Czech Republic</SidebarLink>
                <SidebarLink to='/'>Italy</SidebarLink>
                
            </SidebarMenu>
            <BtnWrap>
                <SidebarRoute to='/'>More Info</SidebarRoute>
            </BtnWrap>
        </SidebarContainer>
    )
}
