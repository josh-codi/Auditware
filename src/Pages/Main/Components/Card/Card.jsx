import React, { Fragment } from 'react'
import styled from 'styled-components'
import { avatar } from '../../../../Assets'
import { colors } from '../../../../Setup/colors'

function Card({onClick, card}) {
    const members = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  return (
    <Container onClick={()=>onClick()}>
        <div className="flex j-c-b">
            <b style={{color: 'gray'}}>May 2023 Audit</b>
            <b style={{color: colors.theme}}>100%</b>
        </div><br />
        <b>Workspce:</b>
        <div>Delorem Ghana Limited</div>

        <section className='sec3'>
            <b>Assigned Members</b>
            <div className="flex j-c-b members">
                <aside className="flex">
                    {
                        members.map((mem, idx)=>{
                            if(idx<3){
                                return <div key={'mem'+idx} className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                                        <img src={avatar} alt="" className=''/>
                                    </div>
                            }
                            return <Fragment key={mem+idx}/>
                        })
                    }
                    {
                        members.length>2 && <div className="profileImg flex j-c-c rounded-full overflow-hidden bg-gray-300 shadow">
                                        <b style={{color: colors.theme}}>+{members.length-3}</b>
                                    </div>
                    }
                </aside>
                <aside className="status">
                    <small style={{color: colors.active}}>In Progress</small>
                    <small>Due: 24/06/2024</small>
                </aside>
            </div>
        </section>
    </Container>
  )
}

const Container = styled.div`
    margin: 0;
    width: 100%;
    height: fit-content;
    border: 1px solid #02474335;
    padding: 0.8rem;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    text-align: left;
    cursor: pointer;
    color: gray;
    
    

    &:hover{
        transform: scale(1.05);
        background-color: rgba(92, 255, 247, 0.03);
    }


    .sec3{
        margin-top: 1.3rem;
        text-align: left;

        .members{
            margin-top: 0.5rem;
        }
    }

    .profileImg{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 4px;
        border: 1px solid #0A9C93;
        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .status{
        display: flex;
        flex-direction: column;
        align-items: end;
        text-align: right;
    }
`

export default Card