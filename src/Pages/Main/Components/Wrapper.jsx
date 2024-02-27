import React, { useEffect, useState } from 'react'
import SideBar from './SideBar/SideBar'
import Header from './Header'
import styled from 'styled-components'

function Wrapper({content, page, onlyIcons, hideHeader}) {
    const [smallSideBar, setSmallSideBar] = useState(false)
    useEffect(() => {
        setSmallSideBar(onlyIcons)
        function handleResize() {
            setSmallSideBar(window.innerWidth < 1000 || onlyIcons);
        }

        handleResize(); // Initial setup

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [onlyIcons]);

    return (
        <Container className='flex'>
            <SideBar onlyIcons={smallSideBar}/>
            <MainContent className="">
                <Header hide={hideHeader} page={page}/>
                <Content className="" style={{height: `${hideHeader ? '100%':'calc(100%-80px'}`, padding: `${hideHeader ? '0':'0 1.5rem'}`}}>
                    {content}
                </Content>
            </MainContent>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    
`
const MainContent = styled.section`
    width: 100%;
    height: 100%;
    
    overflow: hidden !important;
    overflow-y: auto !important;
`
const Content = styled.div`
    width: 100%;
    flex-grow: 1;
`

export default Wrapper