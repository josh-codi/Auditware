import React from "react";
import "./forgetPassword.css"
import slideImage from './assets/images/slide.png';
import styled from "styled-components";
import Wrapper from "./Components/Wrapper";
import { SubmitButton } from "./emailVerification";
import { LeftCover } from "./signIn";
import { LeftMidBlock } from "./signIn";
import { WelcomeBack } from "./signIn";
import { InputContainer } from "./signIn";
import { MainInput } from "./signIn";
import PaymentInput from "./Components/InputField";
import { useNavigate } from 'react-router-dom'; 
import axiosInstance from "../../Service/axios";


function ForgetPassword(){

    const[email,setEmail]=React.useState({email_address:""})
    const navigate = useNavigate();

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setEmail((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }

      const handleSubmit = async(event)=>{
        event.preventDefault()
        // setLoading(true)
        try{
          const res = await axiosInstance.post(`/reset_password`, email);
          console.log(res)
         
          
          // setTimeout(() => {
          //   setLoading(false)
            
          // }, 500);
        }
        catch(error){
          // setLoading(false)
          console.log(error)
        }
      }

    return <Wrapper content={<>
    <LeftCover>
    <LeftMidBlock className="left-mid-block">
        <WelcomeBack className="m-1">
          <p>Forgot your password?</p>
        </WelcomeBack>
        <div className="m-2">
          Provide your email. A verification code will be sent to you
        </div>
        
      </LeftMidBlock>
      <form onSubmit={handleSubmit}>
        <InputContainer className="first-input">
          <label htmlFor="input-1">Email</label>
          <MainInput
            type="text"
            placeholder="Enter your email"
            name="email"
            value={email.email_address}
            onChange={handleChange}
            id="input-1"
          />
        </InputContainer>
        
        <aside className="login-button">
          <SubmitButton >Continue</SubmitButton>
        </aside>
      </form>

    </LeftCover>
     
    </>}/>
  }
  
  // export const SubmitButton = styled.button`
  //    width:430px;
  //    border-radius:12px;
  //    padding: 10px;
  //    border: 1px solid #ccc;
  //    color:white;
  //    background-color: #40ABA4;
  //    margin:0 0 20px 0;
  // `;

export default ForgetPassword