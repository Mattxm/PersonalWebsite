import React from "react"
import styled from 'styled-components'
import { email } from "../config"
import Fade from 'react-reveal/Fade';

const HeroContainer = styled.section`
    max-width: 1000px;
    margin: 0 auto;

    flex-direction: column;
    align-items: flex-start;
    min-height: max(75vh, 400px);
    padding-top: 25vh;
    padding-bottom: 0px;
    color: #BFCCCE;
    
   
    strong {
        color: #f9e58a;
        transition: color .25s linear;
        :hover {
            color: #f9e58a;
        }
    }
    h1 {
        font-size: clamp(32px, 50px, 6vw);
        font-weight: 400;
        @media only screen and (min-width: 768px){
            font-size: 50px;
        }
    }
    p {
        font-size: 1.2rem;
        margin: 20px 0 40px;
        max-width: 700px;
    }

`
const MessageDiv = styled.div`
    border-radius: 3px;
    width: 250px;
    height: 50px;
    border: 1px;
    border-color: #f9e58a;
    border-style: solid;
    transition: background-color .25s linear;

    :hover{
        background-color: rgba(249, 229, 138,0.1);
    }

    @media only screen and (max-width: 768px) {
        margin: auto;
    }

`

const MessageLink = styled.a`
    text-decoration: none;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: #BFCCCE;
    font-weight: 600;
    transition: color .25s linear;
    :hover{
        color: #f9e58a;
    }
`

const Hero = () => {
    return (
        <Fade bottom>
            <HeroContainer id="hero" >
                <h1>Hello, I am <strong>Matthew Miller.</strong></h1>
                <h1>I love Frontend Development.</h1>
                <p>
                    I recently graduated from California State University Chico and I'm looking to get into all things web dev. I've always had a passion for design whether it is making games or working on a unique project. 
                </p>
                <MessageDiv><MessageLink href={`mailto:${email}`}>Message Me</MessageLink></MessageDiv>
            </HeroContainer>
        </Fade>
    )
}


export default Hero