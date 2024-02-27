import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { active, inactive } from './styles'

function NavItem({content, name, link, onlyIcon}) {
  const location = useLocation()
  
  return (
    <Container className='flex' style={{...(location.pathname === link || location.pathname.includes(link?.slice(0,5))) ? {...active} : {...inactive}, width: `${onlyIcon?'fit-content':'90%'}`}}>
      
      <Link to={link} className='flex link'>
        {content}
      </Link>
    </Container>
  )
}

const Container = styled.div`
    width: 90%;
    padding: 0 1rem;
    height: 35px;
    border-radius: 10px;
    margin-bottom: 0.6rem;
    

    &:hover{
      color: #00847b;
      background-color: #30d7cc15 !important;
      font-weight: 500;
    }

    .link{
      width: 100%;
      height: 100%;
    }

    img{
      width: 17px;
    }
    .text{
        margin-left: 1rem;
    }
`

export default NavItem