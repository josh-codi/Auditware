import React from 'react'
import styled from 'styled-components'

function DropBackDrop({onClick, status}) {
    if(!status){
        return <></>
    }
    return (
        <Container onClick={()=>onClick()}/>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    background-color: transparent;
`

export default DropBackDrop