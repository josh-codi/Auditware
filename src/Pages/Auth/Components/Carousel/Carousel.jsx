import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {slide1, slide2,slide3 } from '../../../../Assets';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function Carousel() {
    const [step, setStep] = useState(sessionStorage.getItem('authStep')??1);

    const changeStep = (newStep) => {
        if (newStep) {
            setStep(newStep);
            sessionStorage.setItem('authStep', newStep)
            return;
        }
        setStep((currentStep) => (currentStep < 3 ? currentStep + 1 : 1));
        sessionStorage.setItem('authStep', (step < 3 ? step + 1 : 1))
    };

    useEffect(() => {
        const timer = setInterval(() => {
            changeStep();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Container>
            <img src={step === 1 ? slide1 : step === 2 ? slide2 : slide3} alt="" className='object-fit sideImage'/>
            <div className="carousel-content">
                <div className="head w-full flex j-c-e">
                    <div className='link flex'>
                        <small>auditwarepro.com</small>
                        <svg className='' style={{marginLeft: '0.4rem'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.5 13H17C16.7188 13 16.5 13.25 16.5 13.5V18.3125C16.5 18.4375 16.4062 18.5 16.3125 18.5H5.6875C5.5625 18.5 5.5 18.4375 5.5 18.3125V7.6875C5.5 7.59375 5.5625 7.5 5.6875 7.5H10.5C10.75 7.5 11 7.28125 11 7V6.5C11 6.25 10.75 6 10.5 6H5.5C4.65625 6 4 6.6875 4 7.5V18.5C4 19.3438 4.65625 20 5.5 20H16.5C17.3125 20 18 19.3438 18 18.5V13.5C18 13.25 17.75 13 17.5 13ZM19.625 4H15.375C15.1562 4.03125 15 4.1875 15 4.375C15 4.5 15.0312 4.59375 15.0938 4.65625L16.5938 6.15625L8.09375 14.6562C8.03125 14.75 7.96875 14.8438 7.96875 14.9375C7.96875 15.0312 8.03125 15.125 8.09375 15.1875L8.8125 15.9062C8.875 15.9688 8.96875 16.0312 9.0625 16.0312C9.15625 16.0312 9.25 15.9688 9.34375 15.9062L17.8438 7.40625L19.3438 8.90625C19.4062 8.96875 19.5 9 19.5938 9C19.8125 9 19.9688 8.84375 20 8.625V4.375C20 4.1875 19.8125 4 19.625 4Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className='carousel-body'>
                    {
                        step === 1 ? <StepOne/> :
                        step === 2 ? <StepTwo/> :
                        <StepThree/>
                    }
                    <br /><br />
                    <div className="flex j-c-c">
                        <aside onClick={()=>changeStep(1)} className={`${step === 1 ? 'active' : 'inactive'}`}></aside>
                        <aside onClick={()=>changeStep(2)} className={`${step === 2 ? 'active' : 'inactive'}`}></aside>
                        <aside onClick={()=>changeStep(3)} className={`${step === 3 ? 'active' : 'inactive'}`}></aside>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    min-width: 700px;
    max-width: 700px;
    height: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    transition: 700ms all;

    @media only screen and (max-width: 1270px){
        min-width: 500px;
        max-width: 500px;
    }
    
    @media (max-width: 1005px) {
        display:none;
    }

    .sideImage{
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    .carousel-content{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.29), /* #00000058 with 50% reduced darkness */
            rgba(0, 0, 0, 0.70)  /* #000000e0 with 50% reduced darkness */
        );
        /* background-color: #00000084; */
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .head{
            width: 100%;
            height: 80px;
            justify-content: flex-end;
            padding: 0 2rem;

            .link{
                padding: 0 1.5rem;
                height: 40px;
                background-color: #0000006a;
                color: white;
                border-radius: 20px;
            }
        }

        .carousel-body{
            width: 100%;
            text-align: left;
            padding: 3.5rem 2rem;
            color: white;

            aside{
                background: #d3d3d379;
                width: 80px;
                height: 4px;
                margin: 0 0.5rem;
                cursor: pointer;
                
                &.active{
                    height: 6px;
                    background: white;
                }
            }
        }

        h3{
            font-size: 1.8rem;
            font-weight: 700;
            color: white;
        }
        p{
            font-size: 1.2rem;
        }
    }
    

    `

export default Carousel