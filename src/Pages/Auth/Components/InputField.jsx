import React from "react";
import Mastercard from '../assets/images/Mastercard.svg'
import styled from "styled-components";

function PaymentInput({placeholder,value,type,name,onChange}){

    return(
        <InputDiv>
            <input
            type={type} onChange={(event)=>onChange(event,event.target.value)} placeholder={placeholder} name={name} value={value} style={{paddingLeft: '1rem'}}/>
            <img src={Mastercard}/>
        </InputDiv>
    )
}


const InputDiv = styled.div`
    display:flex;
    align-items:center;
    border: 1px solid #ccc;
    width: 430px;
    margin: 0.5rem 0;
    height:50px;
    border-radius: 12px;
    overflow:hidden;
  
    @media (max-width: 414px) {
      width: 340px; 
      margin: 0 0 1rem 0;
  
      /* Select the label that is an adjacent sibling of EmailInput within the same container */
      + label {
        margin: 0 0 20px 0;
      }
    }
    
    input{
        border:none;
        width:400px;
        height:100%;
        

    }
    img{
        height:25px;
       
    }


`;
export default PaymentInput