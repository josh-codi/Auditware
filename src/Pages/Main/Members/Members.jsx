import React from 'react'
import Wrapper from '../Components/Wrapper'
import DropBackDrop from '../Components/DropBackDrop'
import styled from 'styled-components'
import { colors } from '../../../Setup/colors'
import useMain from '../../../Common/Hooks/useMain'
import Selector from '../Components/Selector/Selector'
import { avatar } from '../../../Assets'
import ModalWrapper from '../Components/ModalAlerts/ModalWrapper'
import AddMember from './Includes/AddMember'
import EditMember from './Includes/EditMember'
import DeleteMember from './Includes/DeleteMember'
import { useLocation } from 'react-router-dom'

function Members() {
    const location = useLocation()
    const {dropStatus, dropName, setDrop, offDrop, modalStatus, modalTitle, openModal, modalPage, modalContent, closeModal} = useMain()
    const data = [1,1,1,1,1,1,1]

    return (
        <Wrapper content={<>
            <Container className='flex v-flex a-i-s'>
                <div onClick={()=>openModal('Add new member',location.pathname, <AddMember/>)} className="flex addMember">
                    <h1>Add a new member</h1>
                    <svg fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
                <br />
                <div className="flex filter">
                    <h1>Showing: All members</h1>
                    <section className="flex">
                        <div className="flex mr-1">
                            <svg className='icon' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z" fill="#323232"/>
                            </svg>
                            <h1 className=''>Filter</h1>
                        </div>

                        <Selector 
                            name={'member_type'}
                            active={'All Members'}
                            dropName={dropName}
                            dropStatus={dropStatus}
                            offDrop={()=>offDrop()}
                            setDrop={(name)=>setDrop(name)}
                            onSelect={(val)=>{}}
                            options={['All Members', 'Organisations']}
                        />
                        <Selector 
                            name={'workspaces'}
                            active={'All Workspaces'}
                            dropName={dropName}
                            dropStatus={dropStatus}
                            offDrop={()=>offDrop()}
                            setDrop={(name)=>setDrop(name)}
                            onSelect={(val)=>{}}
                            options={['All Workspaces', 'JoshHub JoshHub JoshHub']}
                        />
                    </section>

                </div>
                <br />
                {/* Table showing members per filter */}
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Role</th>
                            <th>Date Added</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((member, idx)=>{
                                return <tr key={`member-${dropName}-${idx}`}>
                                    <td>
                                        <div className="profileImg">
                                            <img src={avatar} alt="" />
                                        </div>
                                    </td>
                                    <td>Joshua Odame</td>
                                    <td>4</td>
                                    <td>Member</td>
                                    <td>22/02/2023</td>
                                    <td>
                                        <div className="flex">
                                            <svg onClick={()=>openModal('Edit Member', location.pathname, <EditMember/>)} className='mr-1' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z" fill="black" fillOpacity="0.6"/>
                                            </svg>
                                            <svg onClick={()=>openModal('Confirm Deletion', location.pathname, <DeleteMember/>)} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.7188 16.25H11.6562C11.7806 16.25 11.8998 16.2006 11.9877 16.1127C12.0756 16.0248 12.125 15.9056 12.125 15.7812V7.34375C12.125 7.21943 12.0756 7.1002 11.9877 7.01229C11.8998 6.92439 11.7806 6.875 11.6562 6.875H10.7188C10.5944 6.875 10.4752 6.92439 10.3873 7.01229C10.2994 7.1002 10.25 7.21943 10.25 7.34375V15.7812C10.25 15.9056 10.2994 16.0248 10.3873 16.1127C10.4752 16.2006 10.5944 16.25 10.7188 16.25ZM17.125 3.125H13.9059L12.5777 0.910156C12.4111 0.632428 12.1753 0.402614 11.8934 0.243108C11.6115 0.0836025 11.293 -0.000154039 10.9691 2.12674e-07H7.03086C6.70709 -1.90925e-05 6.38883 0.0838016 6.10707 0.243301C5.82531 0.4028 5.58965 0.632542 5.42305 0.910156L4.09414 3.125H0.875C0.70924 3.125 0.550269 3.19085 0.433058 3.30806C0.315848 3.42527 0.25 3.58424 0.25 3.75L0.25 4.375C0.25 4.54076 0.315848 4.69973 0.433058 4.81694C0.550269 4.93415 0.70924 5 0.875 5H1.5V18.125C1.5 18.6223 1.69754 19.0992 2.04917 19.4508C2.40081 19.8025 2.87772 20 3.375 20H14.625C15.1223 20 15.5992 19.8025 15.9508 19.4508C16.3025 19.0992 16.5 18.6223 16.5 18.125V5H17.125C17.2908 5 17.4497 4.93415 17.5669 4.81694C17.6842 4.69973 17.75 4.54076 17.75 4.375V3.75C17.75 3.58424 17.6842 3.42527 17.5669 3.30806C17.4497 3.19085 17.2908 3.125 17.125 3.125ZM6.9625 1.98867C6.98339 1.9539 7.01294 1.92515 7.04827 1.90523C7.0836 1.8853 7.1235 1.87489 7.16406 1.875H10.8359C10.8764 1.87495 10.9162 1.8854 10.9515 1.90532C10.9868 1.92524 11.0163 1.95396 11.0371 1.98867L11.7191 3.125H6.28086L6.9625 1.98867ZM14.625 18.125H3.375V5H14.625V18.125ZM6.34375 16.25H7.28125C7.40557 16.25 7.5248 16.2006 7.61271 16.1127C7.70061 16.0248 7.75 15.9056 7.75 15.7812V7.34375C7.75 7.21943 7.70061 7.1002 7.61271 7.01229C7.5248 6.92439 7.40557 6.875 7.28125 6.875H6.34375C6.21943 6.875 6.1002 6.92439 6.01229 7.01229C5.92439 7.1002 5.875 7.21943 5.875 7.34375V15.7812C5.875 15.9056 5.92439 16.0248 6.01229 16.1127C6.1002 16.2006 6.21943 16.25 6.34375 16.25Z" fill="#FF0000" fillOpacity="0.7"/>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                        
                    </tbody>
                </table>
                
                
                <DropBackDrop status={dropStatus} onClick={()=>offDrop()}/>
                {/* <ModalWrapper status={state} close={()=>setState(!state)}/> */}
                <ModalWrapper status={modalStatus && modalPage === location.pathname} close={()=>closeModal()} content={modalContent} title={modalTitle}/>
            </Container>
        </>} page={'Members'}/>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    flex-direction: column;

    .drop_backdrop{
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background-color: red;
    }

    .addMember{
        color: ${colors.themeLight};

        h1{
            font-weight: 500;
        }
        svg{
            width: 20px;
            margin-left: 0.5rem;
        }
    }

    .filter{
        width: 100%;
        justify-content: space-between;

        .icon{
            margin-right: 0.4rem;
        }
    }

    table{
        width: 100%;
        text-align: left;
    }
    thead{
        height: 70px;
        border-bottom: 1px solid rgb(0,0,0,.08);
    }
    tbody{
        color: gray;
    }

    tr{
        height: 70px;
        border-bottom: 1px solid rgb(0,0,0,.08);
    }

    .profileImg{
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 50%;

        img{
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
`

export default Members