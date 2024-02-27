import React from 'react'
import Wrapper from '../Components/Wrapper'
import Card from '../Components/Card/Card'
import { GridContent } from '../StyledComponents'
import { useNavigate } from 'react-router-dom'

function Recents() {
    const navigate = useNavigate()
    const members = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  return (
    <Wrapper content={<>
        <GridContent>
            {
                members.map((card, idx)=>{
                    return <Card key={`Card${idx}`} onClick={()=>navigate(`/projects/${idx}`)}/>
                })
            }
        </GridContent>
    </>} page={'Recents'} />
  )
}
export default Recents