import React, { useEffect, useState } from 'react'
import Wrapper from '../Components/Wrapper'
import styled from 'styled-components'
import Toggler from '../../../Common/Components/Toggler'

function Settings() {

    const [details, setDetails] = useState({
        name: '',
        age: '',
        town: '',
        isHoly: false
    })

    // const handleChange = (event, name) => {
    //     const {type, value, checked} = event.target;
    //     setDetails(prev=>{
    //         if(checked){
    //             return {...details, [name]:checked}
    //         }
    //         return {...details, [name]:value}
    //     })
    // }

    useEffect(()=>{
        console.log(details)
    }, [details])


  return <Wrapper content={<>
    <Content className='flex v-flex a-i-s'>
        <section className="flex v-flex a-i-s " style={{marginBottom: '2rem'}}>
            <div className="flex" style={{marginBottom: '0.5rem'}}>
                <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 14.75C7.55417 14.75 8 15.2516 8 15.875C8 16.4984 7.55417 17 7 17H5C4.44583 17 4 16.4984 4 15.875C4 15.2516 4.44583 14.75 5 14.75H7ZM15 14.75C15.5542 14.75 16 15.2516 16 15.875C16 16.4984 15.5542 17 15 17H10.3333C9.77917 17 9.33333 16.4984 9.33333 15.875C9.33333 15.2516 9.77917 14.75 10.3333 14.75H15ZM21.3333 0.5C22.8042 0.5 24 1.84297 24 3.5V18.5C24 20.1547 22.8042 21.5 21.3333 21.5H2.66667C1.19375 21.5 0 20.1547 0 18.5V3.5C0 1.84297 1.19375 0.5 2.66667 0.5H21.3333ZM21.3333 2.75H2.66667C2.29833 2.75 2 3.08562 2 3.5V5H22V3.5C22 3.08562 21.7 2.75 21.3333 2.75ZM22 9.5H2V18.5C2 18.9125 2.29833 19.25 2.66667 19.25H21.3333C21.7 19.25 22 18.9125 22 18.5V9.5Z" fill="black" fill-opacity="0.6"/>
                </svg>
                <div style={{marginLeft: '10px',textAlign: 'left'}}>
                    Update payment method (Current payment method: Visa, ending with - **58)
                </div>
            </div>
            <p style={{color: 'gray', textAlign: 'left'}}>Change your payment method on file. Your payment method would be used for billing.</p>
        </section>

        <section className="Twofa flex j-c-b">
            <section className="flex v-flex a-i-s pr-1">
                <div className="flex" style={{marginBottom: '0.5rem'}}>
                    <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_418_8005)">
                    <path d="M11.7181 28.4216C10.934 28.0351 10.1232 27.6939 9.37029 27.254C4.76004 24.5628 1.81512 20.6083 0.509562 15.4387C0.165714 14.0558 -0.00447892 12.6355 0.00291657 11.2105C0.00291657 9.37824 0.00810912 7.54601 0.00291657 5.71378C0.00291657 5.1426 0.260319 4.76725 0.775124 4.55361C4.3565 3.07003 7.93739 1.58397 11.5178 0.0954321C11.8887 -0.0588611 12.2306 -0.0121278 12.5882 0.136231C15.3798 1.30085 18.1732 2.4625 20.9682 3.62118C21.71 3.92902 22.4518 4.2428 23.1936 4.54545C23.7359 4.76799 23.9948 5.1515 23.9918 5.74419C23.9814 7.62241 24.0222 9.50212 23.9807 11.3818C23.8612 16.6686 21.8584 21.1394 18.0144 24.7727C16.3665 26.3216 14.4389 27.5428 12.3345 28.3711C12.3118 28.3851 12.2911 28.4021 12.2729 28.4216H11.7181ZM21.8124 9.18463H21.7694C21.7694 8.3427 21.7605 7.50002 21.7753 6.65883C21.779 6.43629 21.7115 6.33985 21.5068 6.25529C18.4098 4.97718 15.318 3.6872 12.221 2.41057C12.0798 2.35825 11.9245 2.35825 11.7833 2.41057C8.67894 3.69016 5.57898 4.98237 2.47606 6.26419C2.28764 6.34208 2.21495 6.43184 2.21643 6.64399C2.22682 8.11571 2.21643 9.58668 2.22385 11.0577C2.21647 12.1583 2.32613 13.2567 2.55098 14.3342C3.73785 19.7389 6.82866 23.6335 11.8234 26.0182C11.9467 26.0622 12.0823 26.0569 12.2017 26.0033C15.2263 24.6117 17.6109 22.4969 19.3556 19.6588C20.6493 17.5484 21.446 15.2592 21.6588 12.7898C21.7627 11.5888 21.7642 10.3841 21.8124 9.18463Z" fill="black" fill-opacity="0.6"/>
                    <path d="M10.7619 14.8472C10.8554 14.7581 10.9296 14.6906 11 14.6202C12.5054 13.1168 14.0102 11.6132 15.5146 10.1093C16.154 9.47361 17.1836 9.73843 17.4039 10.5959C17.5174 11.041 17.3698 11.4119 17.0501 11.7279C15.5893 13.1843 14.1304 14.6432 12.6735 16.1045C12.3204 16.4576 11.9703 16.8137 11.6135 17.163C11.0861 17.6823 10.4452 17.6823 9.92296 17.163C8.92895 16.1666 7.9347 15.1706 6.9402 14.1751C6.44765 13.6811 6.42095 13.0023 6.86973 12.5432C7.31852 12.084 8.01358 12.0981 8.52097 12.6032C9.26202 13.3391 9.99788 14.0809 10.7619 14.8472Z" fill="black" fill-opacity="0.6"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_418_8005">
                    <rect width="24" height="28.4218" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>

                    <div style={{marginLeft: '10px', textAlign: 'left'}}>
                        Two-factor authentication (2FA)
                    </div>
                </div>
                <p style={{color: 'gray', textAlign: 'left'}}>Enable two-factor authentication to provide additional security for your account.</p>
            </section>

            <Toggler/>
        </section>
    </Content>
  </>}/>
}


const Content = styled.div`
    width: 100%;

    .Twofa{
        width: 100%;
    }
    
`

export default Settings
