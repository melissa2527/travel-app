import React, {useState, useEffect} from 'react'
import {Navbar} from '../Navbar/Navbar';
import {Sidebar} from '../Sidebar/Sidebar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {HeroContainer, Content, Items, HeroH1, HeroP, HeroBtn} from './HeroElements';

export const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Content>
                <Items data-aos='fade-right'>
                    <HeroH1>Travel the World</HeroH1>
                    <HeroP>Live Your Dreams</HeroP>
                    <HeroBtn>Find Out More</HeroBtn>
                </Items>
            </Content>
        </HeroContainer>
    )
}
