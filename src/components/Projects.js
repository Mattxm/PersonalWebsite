import React, {useState} from "react"
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Modal from "react-modal"
import {rdimages, kcimages, llimages} from "../images"
import {SiUnrealengine, SiBlender, SiAdobephotoshop, SiReact} from "react-icons/si";
import Slide from 'react-reveal/Slide';

const ProjectsContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;

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

    img {
        max-width: 100%;
        height: auto;
    }

    .project{
        p {
            font-size: 1.2rem;
            text-align: left;
        }
        @media only screen and (max-width: 768px) {
            p {
                text-align: left;
            }
        }
    }
    .projectgrid{
        display: flex;
        p {
            font-size: 1.2rem;
            margin-left: 20px;
            text-align: left;
        }
        @media only screen and (max-width: 768px) {
            display: block;
            p {
                text-align: left;
                margin: 0px;
            }
        }
    }

    .projectimg {
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        img {
            max-width: 100%;
            object-fit: cover;
        }
        .vr {
            max-height: 768px;
            object-fit: scale-down;
        }
    }

    .projectdesc {
        color: #BFCCCE;
        text-align: center;
    }

    .imgtext {
        position: absolute;
        text-align: right;
        padding: 10px;
        bottom: 0px;
        color: #BFCCCE;
        font-size: 30px;
        width: calc(100% - 20px);
        background-color: rgba(21, 22, 26, .5)
    }
    .imgtools {
        position: absolute;
        text-align: right;
        padding: 10px;
        top: 0px;
        right: 0px;
        color: #BFCCCE;
        font-size: 30px;
        width: calc(100% - 20px);
    }
`
const Inspect = styled(Modal)`
    
    div {
        margin: auto;
        width: 100vw;
        height: 100vh;
        display: grid;
        place-items: center;
        position: absolute;
        z-index: 10;
    }
    img {
            max-height: 100vh;
            max-width: 100vw;
            object-fit: cover;
        }

`




const Projects = () => {

    const [modalOpen, setModalOpen] = useState(false)
    const [modalContent, setModalContent] = useState(<></>)

    

    return (
        
        <ProjectsContainer id="projects">
            <Slide bottom>
                <>   
                <br></br>
                <h1><span>Projects</span></h1>
                <div className="project">
                    <div className="projectimg">
                        <Carousel emulateTouch={true} stopOnHover={true} showStatus={false} infiniteLoop={true} showThumbs={false} interval={3450} showArrows={false} showIndicators={false} autoPlay={true} onClickItem={(item, content) => {setModalContent(content); setModalOpen(true)}} >
                            <img src={rdimages.a} alt="1" />
                            <img src={rdimages.b} alt="2" />
                            <img src={rdimages.c} alt="3" />
                        </Carousel>
                        <div className="imgtext">
                            Rundown
                        </div>
                        <div className="imgtools">
                            <SiUnrealengine/>
                            <br/>
                            <SiBlender/> 
                            <br/>
                            <SiAdobephotoshop/>
                        </div>
                    </div>
                    <br/>
                    <div className="projectdesc">
                        <p>    
                            Rundown is a parkour/endless runner game created in Unreal Engine. I created the prototype for it and all the models, animations, and effects by myself in an effort to learn more about Unreal Engine and 3D modeling using Blender.                  
                        </p>
                    </div>
                    <br/>
                </div>
                <div style={{paddingBottom: "40px"}}/>
                </> 
                <div className="project">
                    <div className="projectimg">
                        <Carousel emulateTouch={true} stopOnHover={true} showStatus={false} infiniteLoop={true} showThumbs={false} interval={3550} showArrows={false} showIndicators={false} autoPlay={true} onClickItem={(item, content) => {setModalContent(content); setModalOpen(true)}} >
                            <img src={kcimages.d} alt="1" />
                            <img src={kcimages.e} alt="2" />
                            <img src={kcimages.f} alt="3" />
                            <img src={kcimages.g} alt="4" />
                            <img src={kcimages.h} alt="5" />
                            <img src={kcimages.i} alt="6" />
                        </Carousel>
                        <div className="imgtext">
                            Keyclash
                        </div>
                        <div className="imgtools">
                            <SiUnrealengine/>
                            <br/>
                            <SiAdobephotoshop/>
                        </div>
                    </div>
                    <br/>
                    <div className="projectdesc">
                        <p>
                            Keyclash is a multiplayer typing game created in Unreal Engine. I created this to learn more about UI programming and replication.                 
                        </p>
                    </div>
                    <br/>
                </div>
                <div style={{paddingBottom: "40px"}}/>

                <div className="projectgrid">
                    <div className="projectimg" style={{width: "100%", maxWidth: 430, margin: "0 auto"}}>
                        <Carousel emulateTouch={true} width={"100%"} stopOnHover={true} showStatus={false} infiniteLoop={true} showThumbs={false} interval={3600} showArrows={false} showIndicators={false} autoPlay={true} onClickItem={(item, content) => {setModalContent(content); setModalOpen(true)}} >
                            <img className="vr" src={llimages.j} alt="1" />
                            <img className="vr" src={llimages.k} alt="2" />
                            <img className="vr" src={llimages.l} alt="3" />
                            <img className="vr" src={llimages.m} alt="4" />
                        </Carousel>
                        <div className="imgtext">
                            Life's Library
                        </div>
                        <div className="imgtools">
                            <SiReact/>
                            <br/>
                            <SiAdobephotoshop/>
                        </div>
                    </div>
                    <br/>
                    <div className="projectdesc">
                        <p>
                            Life's Library, a simple mobile reading app prototype that scans barcodes to keep track of books. It reads the barcode's ISBN and then uses the Google Books API to fetch all the information. It uses an open source library to fetch book covers.            
                        </p>
                    </div>
                    <br/>
                </div>
                
                

                <Inspect 
                    isOpen={modalOpen} 
                    shouldCloseOnEsc={true} 
                    shouldCloseOnOverlayClick={true}
                    ariaHideApp={true} 
                    style={{overlay: {backgroundColor: "#15161A", zIndex: 10}}}
                    onRequestClose={() => setModalOpen(false)}>
                        <div onClick={()=> setModalOpen(false)}>
                        {modalContent} 
                        </div>
                </Inspect>
            </Slide>    
        </ProjectsContainer>
        
    )
}


export default Projects