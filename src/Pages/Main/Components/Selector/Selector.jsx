import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../../Setup/colors'

function Selector({setDrop, offDrop, name, dropName, dropStatus, options, active, onSelect, width, height, style}) {
  return (
    <Container className="flex v-flex" style={{...style}}>
        <section onClick={()=>setDrop(name)} className="selector flex j-c-b" style={{width: width??'fit-content', height: `${height??'40'}px`}}>
            <small>{active}</small>
            <svg className='ml-1' width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.225 0.408203L0.75 1.8832L9 10.1332L17.25 1.8832L15.775 0.408203L9 7.1832L2.225 0.408203Z" fill="black" fillOpacity="0.6"/>
            </svg>
        </section>
        {
            dropStatus && dropName === name && <section className="selectList scaleanimate flex v-flex" style={{top: `${height ? +height+5 : '45'}px`,width: width??'fit-content'}}>
                {
                    options?.map((option, idx)=>{
                        return <small key={`selector-${name}-${idx}`} onClick={()=>{
                            onSelect(option)
                            offDrop(option)
                        }} className='selectOption flex'>{option}</small>
                    })
                }
            </section>
        }
    </Container>
  )
}

const Container = styled.div`
    position: relative;
    margin-right: 0.5rem;
    z-index: 10;
    /* width: fit-content; */

    .selector{
        border: 1px solid lightgray;
        padding: 0 0.7rem;
        border-radius: 10px;
        cursor: pointer;
    }

    .selectList{
        position: absolute;
        right: 0;
        border: 1px solid lightgray;
        padding: 0.5rem 0.4rem;
        border-radius: 10px;
        background-color: white;
    }

    .selectOption{
        /* font-size: 0.9rem; */
        min-height: 35px;
        text-align: left;
        min-width: 100%;
        padding: 0 0.7rem;
        cursor: pointer;
        
        &:hover{
            background-color: ${colors.activeLight};
            color: ${colors.theme};
            border-radius: 7px;
        }
    }
`

export default Selector