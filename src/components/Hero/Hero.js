import React, {useState} from 'react'
import {Navbar} from '../Navbar/Navbar';
import {Sidebar} from '../Sidebar/Sidebar';
import {HeroContainer, Content, Items, HeroH1, HeroP, HeroBtn} from './HeroElements';

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Content>
                <Items>
                    <HeroH1>Travel the World</HeroH1>
                    <HeroP>Live Your Dreams</HeroP>
                    <HeroBtn>Find Out More</HeroBtn>
                </Items>
            </Content>
        </HeroContainer>
    )
}
