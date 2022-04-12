import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../App";
import { auth } from "../../../firebase.config";
const SignUp = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* handle create user  */
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (!name) return toast.error("Name field is required.");
    if (!phone) return toast.error("Phone field is required.");
    if (!/[0-9]/.test(phone))
      return toast.error("Phone field must be need number.");
    if (phone.length < 11)
      return toast.error("Phone number must need to 11 chars");
    if (!email) return toast.error("Email field is required.");
    if (!password) return toast.error("Password field is required.");

    /* create user  */
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          phoneNumber: phone,
        }).then(() => {
          toast.success("Account created successfully done.");
          sendEmailVerification(auth.currentUser).then(() => {
            toast.success(`We sent you mail for verification to ${email}`);
          });
        });
        console.log(userCredential);
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  return (
    <SignUpContainer>
      <div className="form-wrapper">
        <h1>
          Sign Up into <span className="colorize">Account</span>
        </h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="phone"
              id="phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
