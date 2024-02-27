import React from 'react'
import styled from 'styled-components'
import Selector from '../../Components/Selector/Selector'
import { colors } from '../../../../Setup/colors'
import useMain from '../../../../Common/Hooks/useMain'
import DropBackDrop from '../../Components/DropBackDrop'

function AddMember() {
    const { dropStatus, offDrop, setDrop } = useMain()
    return <Container>
        <InputContent>
            <h1>Name</h1>
            <input name='name' type="text" />
        </InputContent>
        <InputContent>
            <h1>Email</h1>
            <input name='email' type="text" />
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
                style={{marginTop: '0.3rem', width: '100%',}}
            />
        </InputContent>
        <br />
        <button>Done</button>
        <DropBackDrop status={dropStatus} onClick={()=>offDrop()}/>
    </Container>
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    button{
        width: 100%;
        height: 50px;
        color: white;
        background-color: ${colors.themeLight};
        border-radius: 10px;
    }
`    

const InputContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;

    input{
        width: 100%;
        border: 1px solid lightgray;
        height: 50px;
        border-radius: 10px;
        margin-top: 0.3rem;
    }
`

export default AddMember