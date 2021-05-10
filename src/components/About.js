import React from "react"
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import { SiCplusplus, SiReact, SiCss3, SiHtml5, SiUnrealengine, SiJavascript, SiAmazonaws, SiWordpress, SiAdobephotoshop } from "react-icons/si";



const AboutContainer = styled.section` 
    max-width: 1000px;
    margin: 0 auto;

    .info {
        display: grid;
        grid-template-columns: 340px auto;

        @media (max-width: 768px) {
            display: block;
        }
        p {
            font-size: 1.2rem;
            max-width: 700px;
        }
        
    }
    span {
        background: #15161A; 
        padding:0 10px;
    }
    
    h1 {
        width: 100%; 
        text-align: left; 
        border-bottom: 1px solid #BFCCCE;; 
        line-height: 0.1em;
        margin: 10px 0 20px; 
        color: #f9e58a;
        font-size: 32px;
        margin-bottom: 50px;
    }
    

`

const IconContainer = styled.div`
  
    color: #BFCCCE;
    ul {
        text-align: center;
        @media (min-width: 769px) {
            display: grid;
            grid-template-columns: repeat(3, 110px); 
    }
    
    }
    li {
        position: relative;
        display: inline-block;     
        margin: 15px;
        text-align: center;
    }
    .icons {
        color: #BFCCCE;
        transition: color .25s linear;
        :hover{
            color: #f9e58a;
        }
        
    }

`

const Description = styled.div`
   color: #BFCCCE;
   @media (min-width: 769px) {
        padding-left: 30px;
   }
   padding-bottom: 30px;
   padding-top: 0px;
`

const About = () => {

    let iconsize = 50;

    return (
        <Fade bottom>
            <AboutContainer id="about"> 
                <br></br>
                
                
                <h1><span>About Me</span></h1>
                
                <div className="info">
                    <IconContainer>
                        <ul>
                            <li><SiCplusplus className="icons" size={iconsize}/></li>
                            <li><SiReact className="icons" size={iconsize}/></li>
                            <li><SiCss3 className="icons" size={iconsize}/></li>
                            <li><SiHtml5 className="icons" size={iconsize}/></li>
                            <li><SiUnrealengine className="icons" size={iconsize}/></li>
                            <li><SiJavascript className="icons" size={iconsize}/></li>
                            <li><SiAdobephotoshop className="icons" size={iconsize}/></li>
                            <li><SiAmazonaws className="icons" size={iconsize}/></li>
                            <li><SiWordpress className="icons" size={iconsize}/></li>

                        </ul>
                                
                    </IconContainer>
                    
                    <Description>
                        <p>
                        I have sort of a mixed bag of skills and interests although recently I have been mostly working with Web Development using React. 
                        Previously I worked on many indie game prototypes in Unreal Engine as well as some mobile apps using Expo. Check out some of those projects below.
                        <br/><br/>
                        Currently I'm looking to make clean and intuitive user interfaces for either websites or games.
                        </p>
                    </Description>
                </div>
                    
                
            </AboutContainer>
            <div style={{paddingBottom: "50px"}}/>
            
        </Fade>
    )
}


export default About