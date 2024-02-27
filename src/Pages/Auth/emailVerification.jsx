
import React from "react";
import styled from "styled-components";
import './emailVerification.css';
import slideImage from './assets/images/slide.png';
import { useNavigate } from 'react-router-dom'; 
import Wrapper from "./Components/Wrapper";
import { LeftCover } from "./signIn";
import { LeftMidBlock } from "./signIn";
import { WelcomeBack } from "./signIn";
import { InputContainer } from "./signIn";
import { MainInput } from "./signIn";
import axiosInstance from "../../Service/axios";
import axios from "axios";
import { VerifyUrl } from "../../Setup/Constants";

function EmailVerification() {
  const [Code, setCode] = React.useState({ verification_code: "" });
  const navigate = useNavigate();
  

  function handleChange(event) {
    const { name, value } = event.target;

    const cleanedValue = value.replace(/\D/g, '');
    const formattedCode =
      cleanedValue.length <= 8
        ? cleanedValue.replace(/(\d{4})(\d{0,4})/, '$1 $2')
        : Code.verification_code;

    setCode((prevForm) => ({
      ...prevForm,
      [name]: formattedCode,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = sessionStorage.getItem("email");
      console.log(email);
      const url = `${VerifyUrl}/${email}`;
      console.log(url)
      const res = await axios.post(url, Code);
      console.log(res);
      

      setTimeout(() => {
        navigate('/auth-login', {
          state: {
            code: Code,
          },
        });
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper
      content={
        <>
          <LeftCover>
            <LeftMidBlock className="left-mid-block">
              <WelcomeBack className="m-1">
                <p>Email verification</p>
              </WelcomeBack>
              <div className="m-2">
                enter the verification code sent to you email to<br /> continue
              </div>
            </LeftMidBlock>
            <form onSubmit={handleSubmit}>
              <InputContainer>
              
                <div>
                  <label htmlFor="input-1">Verification code</label>
                  <MainInput
                    type="text"
                    placeholder="xxxx-xxxx"
                    name="verification_code"
                    value={Code.verification_code}
                    onChange={handleChange}
                    id="input-1"
                    maxLength={9} // Set maximum length to 9 to accommodate the space
                  />
                </div>
              </InputContainer>
              <aside className="login-button">
                <SubmitButton>Continue</SubmitButton>
              </aside>
            </form>
            <div className="v-code">
              Didn't receive a code?<a href="">Resend in 5:00</a>
            </div>
          </LeftCover>
        </>
      }
    />
  );
}

export const SubmitButton = styled.button`
  width: 430px;
  border-radius: 12px;
  padding: 10px;
  border: 1px solid #ccc;
  color: white;
  background-color: #40aba4;
  margin: 20px 0;

  @media only screen and (max-width: 777px) {
    width: 100%;
    margin: 20px 5px;
  }

  @media (max-width: 414px) {
    width: 340px;
    margin: 0 0 1rem 0;
  }
`;

export default EmailVerification;
