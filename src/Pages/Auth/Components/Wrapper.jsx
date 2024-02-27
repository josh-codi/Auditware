import React from 'react'
import styled from 'styled-components'
import Carousel from './Carousel/Carousel'
import { brand } from '../../../Assets'

function Wrapper({content}) {
  return (
    <Container className='flex a-i-s'>
      <Content>
        <img src={brand} alt="" style={{position: 'absolute', top: 0, left: '2rem'}}/>
        {content}
      </Content>
      <Carousel/>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  overflow: hidden;
  scrollbar
`

const Content = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 3rem;
  overflow-y: auto;
`

export default Wrapper