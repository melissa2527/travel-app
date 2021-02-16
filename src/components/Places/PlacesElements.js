import styled from 'styled-components';

export const PlacesContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: #150f0f;
    color: #fff;
`

export const PlacesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const Card = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`

export const Img = styled.img`
    height: 300px;
    box-shadow: 8px 8px #232323;
`

export const ImgContainer = styled.div`
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const Heading = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`

export const Title = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`

export const Info =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

export const Description = styled.p`
    margin-bottom: 1rem;
`

export const Button = styled.button`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: aqua;
    color: #fff;
    transition: 0.2 ease-in-out;

    &:hover {
        background: #ffc500;
        transition: 0.2 ease-in-out;
        cursor: pointer;
    }
`