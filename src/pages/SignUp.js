import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited Movies, TV Shows and more</h1>
            <h4>Watch Anywhere, Cancel Anytime</h4>
            <h6>
              Ready to watch? Enter your email to create / restart membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input type="password" placeholder="Password" name="password" />
            ) : (
              <input type="email" placeholder="Email Address" name="email" />
            )}
            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    height: 100%;
    width: 100%;
    grid-template-column: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      font-size: 2rem;
      color: white;
    }
    h1 {
      padding: 0.25rem;
    }
    h4 {
      margin-top: -1.5rem;
    }
    h6 {
      margin-top: -1.5rem;
    }
  }
  .form {
    display: grid;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : " 2fr 1fr"};
    width: 60%;
    button {
      padding: 0.5rem 1rem;
      background-color: red;
      border: none;
      cursor: pointer;
      color: white;
      font-size: 1.05rem;
      width: 10rem;
    }
    input {
      color: black;
      padding: 1.5rem;
      font-size: 1.2rem;
      width: 45rem;
      &:focus {
        outline: none;
      }
    }
  }
`;
export default SignUp;
