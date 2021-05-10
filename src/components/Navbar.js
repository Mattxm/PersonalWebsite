import React, {useState, useEffect} from "react"
import styled from "styled-components"
import icon from "./icon.svg"
import { HashLink as Link } from 'react-router-hash-link';
import {  FaArrowUp } from "react-icons/fa" // FaDiscord, FaLinkedin, FaTwitter, FaGithub,
import Fade from 'react-reveal/Fade';

const NavigationBar = styled.nav`
    height: 50px;
    background-color: #131112;
    padding: 15px;
    //position: fixed;
    //top: 0;
    //width: 100%;

`
const NavItems = styled.ul`
    list-style-type: none;
    margin-right: 0px;
    margin-left: 0px;
    padding: 0px;
    overflow: hidden;
    
`
const Item = styled.li`
    float: left;
    align-items: center;
    display: flex;
    height: 50px;
    margin-right: 10px;
    margin-left: 30px;
    &:hover {
        box-shadow: inset 0 -5px 0 0 #22dfa2;
        
    }
    transition: box-shadow .25s linear;
`
const Logo = styled.li`
    float: left;
    height: 40px;
    width: 40px;
    margin: 5px;
    background-color: #BFCCCE;
    -webkit-mask: url(${icon}) no-repeat center;
    mask: url(${icon}) no-repeat center;
    transition: background-color .25s linear;
    :hover{
        background-color: #f9e58a;
    }
`

const Linker = styled(Link)`
    text-decoration: none;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: #BFCCCE;
    font-weight: 500;
    transition: color .25s linear;
    :hover{
        color: #f9e58a;
    }
`

const ToTop = styled(Link)`
    text-decoration: none;
    display: grid;
    place-items: center;
    position: fixed;
    bottom: 50px;
    right: 50px;
    background-color: #f9e58a;
    cursor: pointer; 
    z-index: 9;
    padding: 15px;
    border-radius: 4px;
    color: #131112;
    transition: background-color .25s linear;
    :hover {
        background-color: #22dfa2;;
    }
    @media only screen and (max-width: 768px) {
        bottom: 30px;
        right: 30px;
    }

`


const Navbar = () => {
    const [distance, setDistance] = useState(window.pageYOffset)
    useEffect(()=> {
        window.addEventListener("scroll", ()=>{setDistance(window.pageYOffset)})
    }, [])

    return (
        <NavigationBar id="top" onScroll={()=>setDistance(console.log("testscroll"))}>
            <NavItems>
                <Fade right cascade>
                    <Logo><Linker to="/"/></Logo>
                    <Item><Linker smooth={true} to="/#about">About</Linker></Item>
                    <Item><Linker smooth={true} to="/#projects">Projects</Linker></Item>
                    <Item><Linker smooth={true} to="/#contact">Contact</Linker></Item>
                    {/* <Item style={{float: "right"}} ><Linker to="/experiments">Experiments</Linker></Item> */}
                </Fade>
            </NavItems>
            {distance > 70 && <ToTop smooth={true} to="#top"><FaArrowUp/></ToTop>}
        </NavigationBar>
    )
}

export default Navbar