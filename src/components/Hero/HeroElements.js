import styled from 'styled-components';
import GreeceBgd from '../../img/Greece-background.jpg';

export const HeroContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${GreeceBgd});
    height: 100vh;
    background-position: center;
    background-size: cover;
`

export const Content = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
`

export const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0.2rem;
    width: 650px;
    color: white;
    text-transform: uppercase;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`

export const HeroH1 = styled.h1`
    font-size: 5rem;
    margin-bottom: 1rem;
    padding-right: 4rem;
    box-shadow: 3px 5px yellow;
    letter-spacing: 3px;
    text-shadow: 3px 2px #232323;

    @media screen and (max-width: 750px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 550px) {
        font-size: 2rem;
        margin-top: 5rem;
    }
`

export const HeroP = styled.p`
    font-size: 3rem;
    margin-bottom: 2rem;

    @media screen and (max-width: 750px) {
        font-size: 1.5rem;
    } 
`

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: 1rem 4rem;
    border: none;
    background: aqua;
    color: white;
    transition: 0.3 ease-out;

    &:hover {
        background: orange;
        transition: 0.3 ease-out;
        color: #000;
    }

    @media screen and (max-width: 650px) {
        font-size: 1.25rem;
        margin: 0 auto;
    } 
`