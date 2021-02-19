import React, {useEffect} from 'react';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import {PlacesContainer, Heading, PlacesWrapper, Card, Img, ImgContainer, Info, Title, Description, Button} from './PlacesElements';

export const Places = ({heading, data}) => {

    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, [])

    return (
        <PlacesContainer>
            <Heading data-aos='fade-down'>{heading}</Heading>
            <PlacesWrapper>
                {data.map((item, index) => {
                    return (
                        <Card data-aos='fade-up' key={index}>
                            <ImgContainer>
                                <Img src={item.img} alt={item.name}/>
                            </ImgContainer>
                            <Info>
                                <Title>{item.name}</Title>
                                <Description>{item.description}</Description>
                                <Button>{item.btn}</Button>
                            </Info>
                        </Card>
                    )
                })}
            </PlacesWrapper>
        </PlacesContainer>
    )
}
