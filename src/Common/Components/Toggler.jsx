import React, { useState } from 'react'
import { colors } from '../../Setup/colors'
import styled from 'styled-components'

function Toggler({setAction}) {
    const [status, setStatus] = useState(false)
    return (
        <div onClick={()=>setStatus(!status)} style={{width: '80px', height: '35px', borderRadius: '40px', background: status?colors.activeLight:'rgb(0,0,0,.1)', position: 'relative', transition: '300ms ease-in-out'}}>
            <Dragger className='' style={{background: status?colors.active:'rgb(0,0,0,.5)', right: status?'0':'unset',left: status?'unset':'0'}}></Dragger>
        </div>
    )
}

const Dragger = styled.div`
    height: 100%;
    width: 35px;
    border-radius: 50%;
    position: absolute; 
    transition: 300ms ease-in-out;
    top: 0;
    bottom: 0;
`

export default Toggler