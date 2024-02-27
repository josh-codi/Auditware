import React from 'react'
import styled from 'styled-components'
import { doc, pdf } from '../../../../Assets'
import { colors } from '../../../../Setup/colors'

function FileCard({name, size, type, style}) {
  return (
    <Container className='flex' style={{...style}}>
        <img src={type === 'doc'?doc:pdf} alt="" />
        <div className="details flex v-flex a-i-s ">
            <p>{name}</p>
            <small>{size}</small>
        </div>
    </Container>
  )
}

const Container = styled.div`
    border: 1px solid rgb(0,0,0,.1);
    padding: 0.7rem;
    border-radius: 10px;
    min-width: 200px;
    cursor: pointer;
    transition: 300ms ease-in-out;
    

    &:hover{
        background-color: ${colors.activeLight};
        color: ${colors.theme};
        scale: 1.05;

        small{
            color: ${colors.theme}
        }
    }


    .details{
        margin-left: 0.5rem;
        
        small{
            color: gray
        }
    }
`

export default FileCard
