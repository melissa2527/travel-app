import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, BtnWrap, SidebarRoute} from './SidebarElements';

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen}>
           <Icon onClick={toggle}>
               <CloseIcon onClick={toggle}/>
            </Icon> 
            <SidebarMenu>
                <SidebarLink to='/greece'>Greece</SidebarLink>
                <SidebarLink to='/spain'>Spain</SidebarLink>
                <SidebarLink to='/france'>France</SidebarLink>
                <SidebarLink to='/czech-republic'>Czech Republic</SidebarLink>
                <SidebarLink to='/italy'>Italy</SidebarLink>

                <BtnWrap>
                    <SidebarRoute to='/'>More Info</SidebarRoute>
                </BtnWrap>
            </SidebarMenu>
        </SidebarContainer>
    )
}
