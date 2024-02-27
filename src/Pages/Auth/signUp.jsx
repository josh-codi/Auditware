import React from "react";
import { GoogleButton, AppleButton, SubmitButton } from "./signIn";
import './signUp.css';
import styled from "styled-components";
import googleImage from './assets/images/google-image.png';
import appleImage from './assets/images/apple.png';
import slideImage from './assets/images/slide.png';
import { Link, useNavigate } from 'react-router-dom'; 
import Wrapper from "./Components/Wrapper";
import { brand } from "../../Assets";
import { MainInput } from "./signIn";
import { InputContainer } from "./signIn";
import { LeftCover } from "./signIn";
import { WelcomeBack } from "./signIn";
import { LeftMidBlock } from "./signIn";
import axiosInstance from "../../Service/axios";




function SignUp() {
  const [detail, setDetail] = React.useState({ email_address: "", password: "", first_name: "", last_name: "" });
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);



  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setDetail((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  function submitForm(e){
    e.preventDefault();

    axiosInstance.post('/signup/', detail)
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  const handleSubmit = async(event)=>{
    event.preventDefault()
   
    try{
      const res = await axiosInstance.post(`/signup`, SignUp);
      console.log(res.data)
      sessionStorage.setItem("email",SignUp.email_address);
  
      setTimeout(() => {
        
        navigate('/auth-email-verification');
      }, 500);
    }
    catch(error){
      
      console.log(error)
    }
  }
   
  return (
    <Wrapper content={<>
    <LeftCover>
    <LeftMidBlock className="left-mid-block">
            <WelcomeBack className="m-1">
              <p>Create an account</p>
            </WelcomeBack>
            <div className="m-2">
              Welcome! Create an account to get started
            </div>
            <div className="auth-buttons">
              <GoogleButton>
                <img src={googleImage} alt="Google Image" className="google-icon" />
                Continue with Google
              </GoogleButton>
              <AppleButton>
                <img src={appleImage}/> Continue with Apple
              </AppleButton>
            </div>
            <div className="lines">
              <hr />
              <span className="or-text">or</span>
              <hr />
            </div>
          </LeftMidBlock>
          <form onSubmit={handleSubmit}>
            <NameField className="name-field">
              <Name className="f-name">
                <label htmlFor="first-name">First name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  name="first_name"
                  value={SignUp.first_name}
                  onChange={handleChange}
                  id="first-name"
                />
              </Name>
              <Name className="l-name">
                <label htmlFor="second-name">Last name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  name="last_name"
                  value={SignUp.last_name}
                  onChange={handleChange}  
                  id="second-name"        
                />
              </Name>
            </NameField>
            <InputContainer >
              <div>
                <label htmlFor="input-1">Email</label>
                <MainInput
                  type="email"
                  placeholder="Enter your email"
                  name="email_address"
                  value={SignUp.email_address}
                  onChange={handleChange}
                  id="input-1"
                />
              </div>
          </InputContainer>
          <InputContainer className="second-input">
          <div className="inputLabel">
            <label htmlFor="input-2">Password</label>
            <MainInput
              type={showPassword ? "text" : "password"} 
              name="password"
              placeholder="Enter your password"
              value={SignUp.password}
              onChange={handleChange}
              id="input-2"
            />
          </div>
          <i className={`fa-regular eye ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={()=>setShowPassword(!showPassword)}></i>
        </InputContainer>
            <aside className="login-button">
              <SubmitButton>Sign up</SubmitButton>
            </aside>
          </form>
          <div className="sign-in">Already have an account?<Link to="/auth-login">Sign In</Link></div>
          <div className="terms">By signing up, you are confirming that you have read and agree with all
            <br/> our <a href="#">Terms and Conditions.</a>
          </div>

    </LeftCover>
    
    </>}/>
  );
}


export const Name = styled.div`

display: flex;
flex-direction: column;

label{
  display: flex;
  justify-content:flex-start;
  
}

input{
  width: 200px;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #ccc;
}
#first-name{
  margin: 0 30px 0 0;
}

@media (max-width: 414px) {
 
  #first-name{
    margin: 0 4px 10px 0;
  }
    
}



`;

export const NameField = styled.div`
display: flex;
align-items: center;
margin: 1rem 0 10px 0;

@media (max-width: 414px) {
  display:flex;
  flex-direction:column;

    input{
      width:340px;
    }
}

`;



export default SignUp;
