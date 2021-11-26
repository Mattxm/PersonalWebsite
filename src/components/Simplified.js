import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import {SiUnrealengine, SiBlender, SiAdobephotoshop, SiReact} from "react-icons/si";

const SimplifiedContainer = styled.section` 
    margin: 0 auto;
    max-width: 1000px;

    .self {
        margin: 0 auto;
        padding-top: 40px;

    }
    .pic {
        margin: 0 auto;
        background-color: white;
        width: 115px;
        height: 115px;
        border-radius: 50%;
        
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        margin-bottom: 25px;
        filter: grayscale(100%);
        background-image: url("https://media-exp1.licdn.com/dms/image/C5603AQEUFJT2He4BBA/profile-displayphoto-shrink_200_200/0/1623283591011?e=1643241600&v=beta&t=c7h3x14yJDj68L8Ir9-50JGUG3_N9b0lhM8gCmBSa4c")
    }

    .info {
        text-align: center;
        text-shadow: 1px 1px 4px rgb(0 0 0 / 70%);
        h1 {
            font-size: 30px;
            font-weight: 600;
            color: #fff;
            margin: 0;
            line-height: 1.5;
        }
        p {
            font-size: 16px;
            color: #BFCCCE
        }
        
    }

    .links {
        display: flex;
        justify-content: center;
        gap: 25px;
        color: white;
        font-size: 35px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 5px;
        a{
            transition: color 0.4s;
            color: #BFCCCE;
            &:hover{
                color: #f9e58a;
                
            }
        }
    }
    .projectbox{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
    }
    .project{
        width: 50%;
        @media only screen and (max-width: 768px) {
            width: 100%;
        }
        .card{
            margin: 5px;
            position: relative;
            text-align: center;
            border-radius: 4px;
            overflow: hidden;
            border-width: 2px;
            border-style: solid;
            border-color: #BFCCCE;
            transition: border-color 0.25s;

            :hover{
                border-color: #f9e58a;

                .projdesc{
                    max-height: 300px;
                }
            }
            
            .vr {
                max-height: 768px;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .imgtools {
                position: absolute;
                text-align: right;
                flex-direction: column;
                flex-wrap: wrap;
                display: flex;
                gap: 5px;
                padding: 10px;
                top: 0px;
                right: 0px;
                color: #BFCCCE;
                font-size: 25px;
                width: auto;
            }

            .imgtext {
                position: absolute;
                text-align: center;
                padding: 10px;
                bottom: 0px;
                color: #BFCCCE;
                font-size: 24px;
                width: calc(100% - 20px);
                background-color: rgba(21, 22, 26, .5)
            }

            .projdesc {
                max-height: 0px;
                overflow: hidden;
                transition: max-height 0.25s;
                p{
                    margin-top: 20px;
                    font-size: 16px;
                }
            }

            .more {
                position: absolute;
                padding: 10px;
                top: 0px;
                color: #BFCCCE;
                transition: transform 0.5s, color 0.4s;

                :hover {
                    transform: scale(1.2);
                    color: #f9e58a;
                }

                a {
                    color: inherit;
                }
            }
        }
    }
    
`
const data = [
    {
        title: "Rundown",
        info: "An endless runner game with combat and boss fights.",
        link: "",
        img: ["/images/rd1.png","/images/rd2.png","/images/rd3.png"],
        vid: ["/video/rdc3.webm"],
        tools: [SiUnrealengine, SiBlender, SiAdobephotoshop],
    },
    {
        title: "Targeting System",
        info: "Prototype targeting system for souls-like games.",
        link: "https://mattxm.itch.io/targeting-system",
        img: ["/images/ts1.png","/images/ts2.png",],
        vid: [],
        tools: [SiUnrealengine],
    },
    {
        title: "Imgur Reader",
        info: "Display Imgur albums in an full browser format.",
        link: "reader",
        img: ["/images/reader1.png","/images/reader2.png",],
        vid: [],
        tools: [SiReact],
    },
    {
        title: "Barrier Down",
        info: "Action RPG built during a week long game jam.",
        link: "https://mattxm.itch.io/barrier-down",
        img: ["/images/bd0.png","/images/bd1.png","/images/bd2.png","/images/bd3.png"],
        vid: [],
        tools: [SiUnrealengine, SiBlender, SiAdobephotoshop],
    },

]


const Simplified = () => {
    const Projects = data.map((p, i) => {return (
        <div className="project" key={i}>
            <div className="card">
                <Carousel emulateTouch={true} width={"100%"} stopOnHover={true} showStatus={false} infiniteLoop={true} showThumbs={false} interval={7500} showArrows={false} showIndicators={false} autoPlay={true} /* onClickItem={(item, content) => {setModalContent(content); setModalOpen(true)}} */ >
                    {/* {p.vid.map((it) => <video className="vr" src={it} type="video/webm" autoplay muted loop/>) } */}
                    {p.img.map((it, k) => <img key={k} className="vr" src={it} />) }
                </Carousel>
                <div className="imgtext">
                    {p.title}
                    <div className="projdesc">
                        <p>
                            {p.info}
                        </p>
                    </div>
                </div>
                <div className="imgtools">
                    {p.tools.map((It, k) => <It key={k}/>)}
                </div>
                <div className="more">
                    <a href={p.link}><i class="fas fa-external-link-alt"/></a>
                </div>
            </div>  
        </div>    
    )})
    

    return (
            <SimplifiedContainer> 
                <div className="self">
                    <div className="pic"/>
                    <div className="info">
                        <h1>Matthew Miller</h1>
                        <p>
                            Game & Software Developer
                        </p>
                    </div>
                </div>
                <div className="links">
                    
                    <a href="https://mattxm.itch.io/"><i class="fab fa-itch-io"/></a>
                    <a href="https://github.com/Mattxm"><i class="fab fa-github-square"/></a>
                    <a href="https://www.linkedin.com/in/mattxm/"><i class="fab fa-linkedin"/></a>
                    <a href="mailto: mattxm@live.com"><i class="fas fa-envelope-square"/></a>
                </div>

                <div className="projectbox">
                    {Projects}
                </div>
                
            </SimplifiedContainer>
    )
}


export default Simplified