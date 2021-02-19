import React from 'react'
import {PlacesContainer, Heading, PlacesWrapper, Card, Img, ImgContainer, Info, Title, Description, Button} from './PlacesElements';

export const Places = ({heading, data}) => {
    return (
        <PlacesContainer>
            <Heading>{heading}</Heading>
            <PlacesWrapper>
                {data.map((item, index) => {
                    return (
                        <Card key={index}>
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
