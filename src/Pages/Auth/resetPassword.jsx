import React from "react";
import Wrapper from "./Components/Wrapper";
import { SubmitButton } from "./emailVerification";
import './reset.css'
import { LeftCover } from "./signIn";
import { LeftMidBlock } from "./signIn";
import { InputContainer } from "./signIn";
import { MainInput } from "./signIn";
import { WelcomeBack } from "./signIn";







function ResetPassword(){
    const [reset,setReset]=React.useState({password:""})
    const [showPassword, setShowPassword] = React.useState(false);
    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setReset((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }

      function togglePasswordVisibility() {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      }
    

    return <Wrapper content={<>
    <LeftCover>
    <LeftMidBlock className="left-mid-block">
            <WelcomeBack className="m-1">
              <p>Reset password</p>
            </WelcomeBack>
            <div className="m-2">
              Create a new password to log in to your<br/> account
            </div>
           
          </LeftMidBlock>
          <form>
        <InputContainer className="second-input s-o ">
            <label htmlFor="input-2">New password</label>
            <MainInput
            type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
            name="password"
            placeholder="Enter your password"
            value={reset.password}
            onChange={handleChange}
            id="input-2"
            />
            <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
      
      </InputContainer>

      <InputContainer className="second-input">
            <label htmlFor="input-2">Confirm new password</label>
            <MainInput
            type={showPassword ? "text" : "password"} // Use conditional rendering based on showPassword state
            name="password"
            placeholder="Enter your password"
            value={reset.password}
            onChange={handleChange}
            id="input-2"
            />
            <i className={`fa-regular ${showPassword ? "fa-eye" : "fa-eye-slash"}`} onClick={togglePasswordVisibility}></i>
      
      </InputContainer>
            <aside className="login-button">
              <SubmitButton>Reset password</SubmitButton>
            </aside>
          </form>


    </LeftCover>
       
    
    </>}/>
}
export default ResetPassword