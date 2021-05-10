import React from "react"
import styled from 'styled-components'
import { email } from "../config"

const ContactContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    color: #BFCCCE;
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center;

    span {
        background: #15161A; 
        padding:0 10px;
    }
    h1 {
        width: 100%; 
        border-bottom: 1px solid #BFCCCE;; 
        line-height: 0.1em;
        margin: 10px 0 20px; 
        color: #f9e58a;
        font-size: 32px;
        margin-bottom: 50px;
        @media only screen and (max-width: 768px) {
            font-size: 1.5rem;
        }
    }

    p {
        font-size: 1.2rem;
        margin: 0 auto;
        max-width: 600px;
    }
`
const MessageDiv = styled.div`
    margin: 0 auto;
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

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <br/>
            <h1><span>Let's Have a Conversation.</span></h1>
            <br/>
            <p style={{paddingBottom: "50px"}}>
                Thank you for checking out my website. If you have an interesting project or idea email me at Mattxm@live.com, I'd love to be part of it.
            </p>
            <MessageDiv><MessageLink href={`mailto:${email}`}>Email Me</MessageLink></MessageDiv>
            <div style={{paddingBottom: "100px"}}/>
            <p style={{paddingBottom: "5px", fontSize: "1rem"}}>Created by Matthew Miller</p>
        </ContactContainer>
    )
}


export default Contact