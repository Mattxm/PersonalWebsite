import React from "react"
import styled from 'styled-components'

const FourContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    height: calc(100vh - 80px);
    display: grid;
    place-items: center;
    color: #BFCCCE;
    text-align: center;
    justify-content: center;

    h1 {
        font-size: 100px;
    }
    p {
        margin-bottom: 50px;
    }
`
const Return = styled.div`
    border-radius: 3px;
    width: 250px;
    height: 50px;
    border: 1px;
    border-color: #f9e58a;
    border-style: solid;
    transition: background-color .25s linear;
    margin: 0;

    :hover{
        background-color: rgba(249, 229, 138,0.1);
    }

`

const Link = styled.a`
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
        <FourContainer>
            <div>
                <h1>404</h1>
                <p>Page not found.</p>
                <Return><Link href="/">Return Home</Link></Return>
            </div>
        </FourContainer>
    )
}


export default Contact