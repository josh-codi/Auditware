import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../../Setup/colors'
import { GridContent } from '../../StyledComponents'
import Card from '../../Components/Card/Card'
import { useNavigate } from 'react-router-dom'

function ProjectListings() {
    const navigate = useNavigate()
    const [tab, setTab] = useState('all')
    const projects = [1,1,1,1,1,1,1]
  return (
    <Container >
        <section className='tab flex'>
            <div onClick={()=>setTab('all')} className={`tabItem ${tab === 'all' ? 'active' : ''}`}>All Projects</div>
            <div onClick={()=>setTab('completed')} className={`tabItem ${tab === 'completed' ? 'active' : ''}`}>Completed</div>
            <div onClick={()=>setTab('progress')} className={`tabItem ${tab === 'progress' ? 'active' : ''}`}>In Progress</div>
            <div onClick={()=>setTab('pending')} className={`tabItem ${tab === 'pending' ? 'active' : ''}`}>Pending</div>
            <div onClick={()=>setTab('unsatisfactory')} className={`tabItem ${tab === 'unsatisfactory' ? 'active' : ''}`}>Unsatisfactory</div>
        </section>
        <br />
        <GridContent>
            {
                projects.map((card, idx)=>{
                    return <Card card={card} key={`project-card-${idx}`} onClick={()=>navigate(`/projects-text`)}/>
                })
            }
        </GridContent>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    
    .tab{
        border-bottom: 1px solid lightgray;
        width: 100%;
        
        .tabItem{
            margin-right: 1.5rem;
            padding: 0.5rem 0;
            font-weight: 500;
            color: gray;
            cursor: pointer;

            &.active{
                color: ${colors.themeLight};
                font-weight: 600;
                border-bottom: 2px solid ${colors.themeLight};
            }
        }
    }
`

export default ProjectListings