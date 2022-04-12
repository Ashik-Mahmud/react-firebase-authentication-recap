import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../App";
const SignUp = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  return (
    <SignUpContainer>
      <div className="form-wrapper">
        <h1>
          Sign Up into <span className="colorize">Account</span>
        </h1>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="input-group">
            <button className="btn">Sign Up</button>
          </div>
          <p>
            Already have account?
            <span
              onClick={() => navigate("/login")}
              className="cursor-pointer colorize"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.section`
  position: relative;
  display: grid;
  place-items: center;
  background-color: #f8f8f8;
  min-height: 90vh;
  .form-wrapper {
    position: relative;
    background: #fff;
    width: 450px;
    padding: 3rem;
    form {
      margin: 1rem 0rem;
    }
    .input-group {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      margin: 0.4rem 0rem;
      input {
        width: 100%;
        padding: 1rem;
        border: 2px solid #ccc;
        font-family: var(--fonts);
        font-size: 1rem;
        outline: none;
        border-radius: 4px;
        &:focus {
          border: 2px solid var(--primary-color);
        }
      }
    }
    .line {
      width: 100%;
      position: relative;
      margin: 1rem 0rem;
      text-align: center;
      color: var(--primary-color);
      &::after,
      &::before {
        content: "";
        width: 45%;
        height: 1px;
        background-color: var(--primary-color);
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::after {
        right: 0%;
      }
    }
    .btn-group {
      text-align: center;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      button {
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        font-size: 1.1rem;
        background: transparent;
        color: var(--primary-color);
        border: 1px solid var(--primary-color);
        cursor: pointer;
        border-radius: 50%;
        transition: all 0.3s ease;
        &:hover {
          background: var(--primary-color);
          color: var(--accent-color);
        }
      }
    }
  }
`;
export default SignUp;
