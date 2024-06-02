import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

const SignUp = () => {
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited Movies, TV Shows and more</h1>
            <h4>Watch Anywhere, Cancel Anytime</h4>
            <h6>Ready to watch? Enter your email to create / restart membership</h6>
          </div>
          <div className="form">
            <input type="password" placeholder="Password" name="password"/>
            <input type="email" placeholder="Email Address" name="email"/>
            <button>Get Started</button>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div``;
export default SignUp;
