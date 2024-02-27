import React from 'react'
import styled from 'styled-components'

function ModalWrapper({content, status, title, close}) {
    if(!status){
        return<></>
    }
    return (
        <Container>
            <BackDrop onClick={()=>close()}/>
            <Content className='scaleanimate'>
                <div className="content_title flex j-c-b">
                    <h1 style={{fontSize: '1.2rem', fontWeight: '500'}}>{title||'_____'}</h1>
                    
                    <svg onClick={()=>close()} className="closeModal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <br />
                {content}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 30;
`

const Content = styled.div`
    min-width: 500px;
    height: fit-content;
    max-height: 80vh;
    background-color: white;
    padding: 1.5rem 2rem;
    border-radius: 20px;
    box-shadow: 0 0 15px -1px gray;
    z-index: 10;

    .closeModal{
        width: 20px;
        cursor: pointer;

        &:hover{
            color: gray;
        }
    }
`

const BackDrop = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 9;
    background: rgb(0,0,0,.5);
    filter: blur(60px);

`

export default ModalWrapper