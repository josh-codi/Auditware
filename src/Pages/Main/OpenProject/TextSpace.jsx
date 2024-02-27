import React, { useState } from 'react'
import styled from 'styled-components'
import TextEditor from '../Components/TextEditor'
import { colors } from '../../../Setup/colors'
import { avatar } from '../../../Assets'
import { Data_SectionOne } from './data'
import useMain from '../../../Common/Hooks/useMain'
import FileCard from '../Files/Includes/FileCard'

function TextSpace() {
    const {dropName, dropStatus, setDrop, offDrop} = useMain()
    const [tab, setTab] = useState('Preparation notes')
    const [tab2, setTab2] = useState('Resources')
    const avatarData = [1,1,2]

    return (
        <Container className='flex a-i-s'>
            <SectionOne className='' style={{minWidth: '300px',width: '300px', height: '100%'}}>
                <div className="w-100 flex contributors">
                    {
                        avatarData.map((val, idx)=><div key={idx} className='avatar mr-1'>
                            <img src={avatar} alt="" className='img-fit'/>
                        </div>)
                    }
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" fill="black" fillOpacity="0.5"/>
                    </svg>
                </div>
                <br />
                <div style={{padding: '1rem 1rem'}}>
                    {
                        Data_SectionOne.map((val, idx)=>{
                            return <SideOneItem key={`sideoneitem${idx}`} className='flex v-flex mb-1'>
                                <div onClick={()=>setDrop(`sideoneitem${idx}`)} style={{color: dropName === `sideoneitem${idx}` && colors.active, borderBottom: dropName === `sideoneitem${idx}` && `1px solid ${colors.active}`}} className="header flex j-c-b">
                                    <b style={{fontWeight: '500'}}>{val.head}</b>
                                    {
                                        dropName === `sideoneitem${idx}` ? <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.99998 0.200353C9.69998 0.200353 10.4 0.470351 10.93 1.00035L17.45 7.52035C17.74 7.81035 17.74 8.29035 17.45 8.58035C17.16 8.87035 16.68 8.87035 16.39 8.58035L9.86998 2.06035C9.38998 1.58035 8.60998 1.58035 8.12998 2.06035L1.60998 8.58035C1.31998 8.87035 0.839981 8.87035 0.54998 8.58035C0.259979 8.29035 0.259979 7.81035 0.54998 7.52035L7.06998 1.00035C7.59998 0.470351 8.29998 0.200353 8.99998 0.200353Z" fill="#0A9C93"/>
                                        </svg> : <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill={`#024744`} d="M9.00002 8.79965C8.30002 8.79965 7.60002 8.52965 7.07002 7.99965L0.55002 1.47965C0.26002 1.18965 0.26002 0.709648 0.55002 0.419648C0.84002 0.129648 1.32002 0.129648 1.61002 0.419648L8.13002 6.93965C8.61002 7.41965 9.39002 7.41965 9.87002 6.93965L16.39 0.419648C16.68 0.129648 17.16 0.129648 17.45 0.419648C17.74 0.709648 17.74 1.18965 17.45 1.47965L10.93 7.99965C10.4 8.52965 9.70002 8.79965 9.00002 8.79965Z"/>
                                        </svg>
                                    }
                                </div>
                                {
                                    (dropStatus && dropName === `sideoneitem${idx}`) && <div className='body' style={{marginBottom: '0.7rem'}}>
                                        {val.body}
                                    </div>
                                }
                            </SideOneItem>
                        })
                    }
                </div>
            </SectionOne>
            <section style={{width: '100%', height: '100%', padding: '0 1.5rem', overflow: 'hidden', overflowY: 'auto'}} className=''>
                <section className="flex v-flex a-i-s j-c-s" style={{minHeight: '100px',position: 'sticky', top: 0, background: 'white', zIndex: '10', paddingTop: '1.5rem'}}>
                    <div className="w-100 flex j-c-b mb-1">
                        <b>2024 First Quarter Financial Audit</b>
                        <b>In progress - 80%</b>
                    </div>
                    <section className='tab flex mb-1 mt-1'>
                        <div className={`mr-1 ${tab === 'Documents:' ? 'active' : ''}`}>Documents:</div>
                        <div onClick={()=>setTab('Preparation notes')} className={`tabItem ${tab === 'Preparation notes' ? 'active' : ''}`}>Preparation notes</div>
                        <div onClick={()=>setTab('progress')} className={`tabItem ${tab === 'Additional preparation notes' ? 'active' : ''}`}>Additional preparation notes</div>
                    </section>
                </section>
                <section style={{height: 'calc(100%-111px)', overflow: 'hidden', overflowY: 'auto', background: 'white', zIndex: 0}}>
                    <TextEditor/>
                </section>
            </section>
            <SectionTwo className='' style={{minWidth: '320px', width: '320px', height: '100%',}}>
                <div className="profile w-100 flex j-c-end">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black" fillOpacity="0.5"/>
                    </svg>
                    <div className="relative ml-1">
                        <div className="noti absolute"></div>
                        <svg style={{width: '25'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>
                    <div className='avatar ml-1'>
                        <img src={avatar} alt="" className='img-fit'/>
                    </div>
                </div>
                <aside>
                    <section className='tab flex mb-1 mt-1'>
                        <div onClick={()=>setTab2('Resources')} className={`tabItem ${tab2 === 'Resources' ? 'active' : ''}`}>Resources</div>
                        <div onClick={()=>setTab2('External Refences')} className={`tabItem ${tab2 === 'External Refences' ? 'active' : ''}`}>External Refences</div>
                    </section>
                    <FileCard type={'doc'} name={'Sample Template.docx'} size={'20mb'} style={{margin: '0.5rem 0'}}/>
                    <FileCard type={'pdf'} name={'Sample Template.docx'} size={'20mb'} style={{margin: '0.5rem 0'}}/>

                    <div className='flex v-flex mb-1 mt-1' style={{width: '100%', textAlign: 'left', backgroundColor: 'white', borderRadius: '10px', overflow: 'hidden'}}>
                        <section className="relative" style={{height: '150px', width: '100%', overflow: 'hidden'}}>
                            <img src={avatar} alt="" className='' style={{objectFit: 'contain', width: '100%', height: '100%',margin: 'auto'}}/>
                            <div className='flex j-c-c absolute' style={{background: 'rgb(0,0,0,.5)', top: 0, bottom: 0, left: 0, right: 0}}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="white" fillOpacity="0.5"/>
                                <path d="M29 18.2679C30.3333 19.0377 30.3333 20.9623 29 21.7321L17 28.6603C15.6667 29.4301 14 28.4678 14 26.9282V13.0718C14 11.5322 15.6667 10.5699 17 11.3397L29 18.2679Z" fill="white"/>
                                </svg>
                            </div>
                        </section>
                        <section style={{padding: '0.8rem 0.5rem', color: 'gray'}}>
                            How to get the best out of your audit.
                            10 tips on how to optimize your audit process to get the best out...
                            https://youtu.be/fG6es7mFcw8?si=qGcWFNEhxi-nmGv
                        </section>
                    </div>
                    <FileCard type={'doc'} name={'Sample Template.docx'} size={'20mb'} style={{margin: '0.5rem 0'}}/>
                    <FileCard type={'pdf'} name={'Sample Template.docx'} size={'20mb'} style={{margin: '0.5rem 0'}}/>
                    <FileCard type={'doc'} name={'Sample Template.docx'} size={'20mb'} style={{margin: '0.5rem 0'}}/>
                    <FileCard type={'pdf'} name={'Sample Template.docx'} size={'20mb'} style={{margin: '0.5rem 0'}}/>
                </aside>
            </SectionTwo>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    .tab{
        border-bottom: 1px solid lightgray;
        width: 100%;
        
        .tabItem{
            margin-right: 1.3rem;
            padding: 0.5rem 1rem;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: 500;
            color: gray;
            cursor: pointer;

            &.active{
                color: ${colors.themeLight};
                font-weight: 600;
                background-color: ${colors.activeLight};
            }
        }
    }

    .avatar{
        min-width: 50px;
        min-height: 50px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid ${colors.active}
    }

`

const SectionOne = styled.section`
    overflow: hidden;
    overflow-y: auto;
    background-color: #F2F2F2;


    .contributors{
        position: sticky;
        top: 0;
        background-color: #F2F2F2;
        padding: 0.5rem 1rem;
        padding-top: 2rem;
    }
`

const SideOneItem = styled.section`
    .header{
        width: 100%;
        padding-bottom: 0.5rem;
        margin-bottom: 0.3rem;
    }
    .body{
        text-align: left;
        line-height: 1.8rem;
        color: gray
    }
`

const SectionTwo = styled.section`
    overflow: hidden;
    overflow-y: auto;
    background-color: #F2F2F2;

    aside{
        padding-left: 1rem;
        padding-right: 1rem;
    }

    .profile{
        position: sticky;
        top: 0;
        background-color: #F2F2F2;
        padding: 0.5rem 1rem;
        padding-top: 2rem;

        .noti{
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background-color: red;
            top: 0;
            right: 0;
        }
    }

    .tab{
        border-bottom: 1px solid lightgray;
        width: 100%;
        
        .tabItem{
            margin-right: 1.5rem !important;
            padding: 0 !important;
            padding-left: 0.5rem !important;
            padding-bottom: 0.3rem !important;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-weight: 500;
            color: gray;
            cursor: pointer;

            &.active{
                color: ${colors.themeLight};
                font-weight: 600;
                background-color: ${colors.activeLight};
            }
        }
    }
`


export default TextSpace