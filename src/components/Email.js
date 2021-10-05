import React, { useState } from "react";
import { Button } from "./styles/Button.styled";
import {
  BackgroundImage,
  ContentWrapper,
  EmailContainer,
  EmailInput,
  Title,
  Description,
  Message
} from "./styles/Email.styled";
import Image from "../assets/images/Email.jpg"
import validator from "email-validator";

const Email = () => {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const verifyEmail = () => {
    if (validator.validate(email)){
        setMessage("Thank you! Check you inbox for a surprise :)")
    } else {
        setMessage("Please type in a correct Email Adress")  
     }
  };

  return (
    <EmailContainer>
      <BackgroundImage src={Image} alt="" />
      <ContentWrapper>
        <Title>Get Acecess to Exclusive Offers</Title>
        <Description>
          Sign up for our newletter to get 10% off your first trip!
        </Description>
        <EmailInput
          type="email"
          placeholder="Enter your Email"
          onChange={handleChange}
         
        />
        {message && <Message>{message}</Message>}
        <Button as="button" primary="true" round="true" css={`max-width: 300px; width: 100%;`} onClick={verifyEmail}>Sign Up</Button>
      </ContentWrapper>
    </EmailContainer>
  );
};

export default Email;
