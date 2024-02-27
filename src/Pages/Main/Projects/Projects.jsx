import React from 'react'
import Wrapper from '../Components/Wrapper'
import ProjectListings from './Includes/ProjectListings'

function Projects() {
  return (
    <Wrapper page={'Projects'} content={<>
        <ProjectListings/>
    </>}/>
  )
}

export default Projects