import React from 'react'
import Wrapper from '../Components/Wrapper'
import styled from 'styled-components'
import { colors } from '../../../Setup/colors'
import useMain from '../../../Common/Hooks/useMain'
import { GridContent } from '../StyledComponents'
import Card from '../Components/Card/Card'
import { useLocation, useNavigate } from 'react-router-dom'
import AddWorkspace from './AddWorkspace'
import ModalWrapper from '../Components/ModalAlerts/ModalWrapper'

function Workspaces() {
    const navigate = useNavigate()
    const {dropName, offDrop, setDrop, modalContent, modalPage, modalTitle, openModal, modalStatus, closeModal} = useMain()
    const location = useLocation()
    const data = [1,1,1,1,1]
    const companyName = 'DSR Audit Tax Consultancy';

    const variations = [
    companyName,
    `${companyName} 123`,
    `${companyName} Solutions`,
    `${companyName} Group`,
    `${companyName} Services`,
    ];
  return <Wrapper content={<>
    <Container className='flex v-flex'>
        <div onClick={()=>openModal('Add a new workspace', location.pathname ,<AddWorkspace/>)} className="flex" style={{color: colors.active, fontWeight: '500'}}>
            <p>Add a new workspace</p>
            <svg style={{width: 17, marginLeft: '0.5rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
        <div className="flex v-flex w-full mt-1">
            {
                data.map((list, idx)=>{
                    return <div key={`List-${idx}`} className='w-full flex v-flex a-i-s'>
                        <section onClick={()=>dropName === `List-${idx}` ? offDrop : setDrop(`List-${idx}`)} className="flex w-full j-c-b" style={{color: colors.theme, height: '70px', borderBottom: '1px solid rgb(0,0,0,.2)'}}>
                            <b>{variations[idx]}</b>
                            <svg style={{width: 20}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </section>
                        {
                            dropName === `List-${idx}` && <GridContent style={{margin: '1rem 0'}} className='animatefromleft'>
                                {
                                    data.map((card, index)=>index<3 ? <Card onClick={()=>navigate(`/projects/${index}`)} key={`ListCard-${index}`}/>: <div key={`ListCard-${index}`}/>)
                                }
                            </GridContent>
                        }
                    </div>
                })
            }
            
            
        </div>

        <ModalWrapper status={modalStatus && modalPage === location.pathname} close={()=>closeModal()} content={modalContent} title={modalTitle}/>
    </Container>
  </>} page={'Workspaces'}/>
}

const Container = styled.div`
    width: 100%;

`

export default Workspaces