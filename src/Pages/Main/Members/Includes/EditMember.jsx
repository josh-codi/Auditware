import React from 'react'
import { InputContent, ModalForm } from '../../StyledComponents'
import { avatar } from '../../../../Assets'
import styled from 'styled-components'
import { colors } from '../../../../Setup/colors'
import Selector from '../../Components/Selector/Selector'
import useMain from '../../../../Common/Hooks/useMain'
import DropBackDrop from '../../Components/DropBackDrop'

function EditMember() {

    const {dropStatus, offDrop, setDrop } = useMain()

    return (
        <ModalForm style={{alignItems: 'center'}}>
            <br />
            <ProfileImage>
                <img src={avatar} alt="" />
            </ProfileImage>
            <br />
            <InputContent>
                <h1>Name</h1>
                <input name='name' type="text" value={'Joshua Odame'} />
            </InputContent>
            <InputContent>
                <h1>Email</h1>
                <input name='email' type="email" value={'odamejoshua37@gmail.com'} />
            </InputContent>
            <InputContent>
            <h1>Role</h1>
            <Selector 
                active={'Select Role'} 
                height={'50'} 
                width={'100%'}
                dropName={'role'} 
                dropStatus={dropStatus}
                name={'role'}
                offDrop={offDrop}
                setDrop={(name)=>setDrop(name)}
                onSelect={(val)=>{}}
                options={['Member', 'Manager']}
                style={{marginTop: '0.3rem', width: '100%'}}
            />
        </InputContent>
        <br />
        <button>Done</button>
        <DropBackDrop status={dropStatus} onClick={()=>offDrop()}/>
        </ModalForm>
    )
}

const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    border: 1px solid ${colors.themeLight};
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`



export default EditMember