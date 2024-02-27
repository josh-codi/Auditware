import React from 'react'
import {avatar} from '../../../Assets/index'
import styled from 'styled-components'
import { colors } from '../../../Setup/colors'

function Header({page, hide}) {
    if(hide){
        return <></>
    }
    return (
        <Container className='w-100 h-[80px] flex items-center j-c-b'>
            <h1 className="pageTitle" style={{color: colors.theme}}>{page}</h1>
            <section className="flex">

                <div className="search p-1 flex">
                    <svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder='Search recent projects'/>
                </div>

                <div className='notification'>
                    <svg className='bell w-5 h-5 mx-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    <div className="alert round"></div>
                </div>
                

                <div className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                    <img src={avatar} alt="" className=''/>
                </div>
            </section>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    min-height: 100px;
    padding: 0 1.5rem;
    position: sticky;
    top: 0;
    background-color: white;
    z-index: 11;

    .search{
        border: 1px solid lightgray;
        width: 300px;
        height: 40px;
        border-radius: 10px;
        padding: 5px;

        .searchIcon{
            width: 18px;
            min-width: 18px;
        }
        input{
            width: 100%;
            height: 100%;
            padding-left: 0.5rem;
            font-size: 0.8rem;
        }

        @media only screen and (max-width: 640px){
            display: none;
        }
    }


    .pageTitle{
        font-weight: 600;
        font-size: 1.1rem;
    }
    .notification{
        margin: 0 1rem;
        position: relative;

        .alert{
            position: absolute;
            top: 0;
            right: 0;
            width: 7px;
            height: 7px;
            background-color: red;
        }
        .bell{
            width: 25px;
        }
    }
    .profileImg{
        width: 40px;
        height: 40px;
        overflow: hidden;
        border-radius: 100%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`


export default Header