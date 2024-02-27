import React from 'react'
import styled from 'styled-components'

function Loading({status}) {
    if(!status){
        return <></>
    }
    return (
        <Container className='flex j-c-c'>
            <div className='flex j-c-c' style={{background: 'white', borderRadius: '20px', width: '200px', height: '100px'}}>
                Loading ...
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #00000068;
    z-index: 50;
    
`

export default Loading