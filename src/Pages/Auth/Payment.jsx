import React, { useEffect } from "react";
import Wrapper from "./Components/Wrapper";
import { SubmitButton } from "./signIn";
import './Payment.css'
import Mastercard from './assets/images/Mastercard.svg'
import exclamation from './assets/images/exclamation.svg'
import { LeftCover } from "./signIn";
import { LeftMidBlock } from "./signIn";
import { WelcomeBack } from "./signIn";
import { InputContainer } from "./signIn";
import { MainInput } from "./signIn";
import PaymentInput from "./Components/InputField";




function Payment(){

    const[payment,setPayment]= React.useState({cardName:"",cardNumber:"",expiryDate:"",CVV:""})


    function handleChange(event,value) {
        const { name, type, checked } = event.target;
        setPayment((prevForm) => ({
          ...prevForm,
          [name]: type === "checkbox" ? checked : value,
        }));
      }



    return <Wrapper content={<>
    <LeftCover>
    <LeftMidBlock className="left-mid-block">
            <WelcomeBack className="t-1">
              <p>Add a payment method</p>
            </WelcomeBack>
            <div className="t-2">
              Add a payment method for your account.Billing would be made <br/> through this payment method based on your selected package.
            </div>
           
            
          </LeftMidBlock>
          <form>
            <div className="card-details">
              <InputContainer className="card-name">
                <label htmlFor="cardholder-name">Card holder name</label>
                <MainInput
                  type="text"
                  placeholder="Enter card holder name"
                  name="cardName"
                  value={payment.cardName}
                  onChange={handleChange}
                  id="cardholder-name"
                />
              </InputContainer>
              
              {payment.cardNumber}
              <InputContainer className="l-name">
                <label htmlFor="second-name">Card number</label>
                <PaymentInput placeholder="xxxx-xxxx-xxxx-xxxx"
               onChange={(event,value)=>handleChange(event,value)} 
               name="cardNumber"
                type="text" 
              value={setPayment.cardNumber} />
              </InputContainer>
            </div>
            <div className="flex-input">

                    <div className="first-input">
                    <label htmlFor="input-1">Expiry Date</label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        name="expiryDate"
                        value={payment.expiryDate}
                        onChange={handleChange}
                        id="input-1"
                    />
                    </div>

                    <div className="second-input">
                    <label htmlFor="input-2">CVV</label> <label><img/></label>
                    <input
                        type="number"
                        placeholder=""
                        name="CVV"
                        value={payment.CVV}
                        onChange={handleChange}
                        id="input-2"
                    />
                    </div>
            </div>
           
         
            <aside className="login-button">
              <SubmitButton>Continue</SubmitButton>
            </aside>
          </form>

    </LeftCover>
        
         
    
    
    
    </>}/>
}

  


export default Payment