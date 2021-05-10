import React from "react"
import styled from "styled-components"
import icon from './icon.svg'

const LoadScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 111;
    background-color: #15161A;
    background-image: url(${icon});
    background-repeat: no-repeat;
    background-position: center;
`

function Pre(props) {
    if (props.load)
        return (<LoadScreen/>)
    else
        return (<></>)
}

export default Pre;