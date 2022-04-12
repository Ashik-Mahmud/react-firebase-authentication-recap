import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  TwitterAuthProvider,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  AiFillGithub,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../App";
import { auth } from "../../../firebase.config";
import useFirebase from "../../../hooks/useFirebase";
const Login = () => {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [navigate, isAuth]);

  const { signInWithProvider } = useFirebase();

  const [isReset, setIsReset] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* sign in with google */
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithProvider(provider);
  };
  /* sign in with google */
  const signInWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithProvider(provider);
  };

  /* sign in with Twitter */
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithProvider(provider);
  };

  /* handle login user */
  const handleLoginUser = (event) => {
    event.preventDefault();
    if (!email) return toast.error("Email field is required.");
    if (!isReset) {
      if (!password) return toast.error("Password field is required.");
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("LoggedIn Successfully done.");
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  /* reset password */
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`We sent you email for reset password to ${email}`);
      })
      .catch((err) => toast.error("Something went wrong."));
  };

  return (
    <LoginContainer>
      <div className="form-wrapper">
        <h1>
          {isReset ? (
            <>
              Reset <span className="colorize">Password</span>
            </>
          ) : (
            <>
              Sign In into <span className="colorize">Account</span>
            </>
          )}
        </h1>
        <form onSubmit={handleLoginUser}>
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
          {!isReset && (
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
          )}

          <p>
            {isReset ? "Go to Login" : " Forgot Password?"}
            <span
              onClick={() => setIsReset((prev) => !prev)}
              className="cursor-pointer colorize"
            >
              {isReset ? " Page" : " Reset"}
            </span>
          </p>
          <div className="input-group">
            {isReset ? (
              <button onClick={resetPassword} type="button" className="btn">
                Reset Password
              </button>
            ) : (
              <button type="submit" className="btn">
                Sign In
              </button>
            )}
          </div>
          <p>
            Not Account Yet?
            <span
              onClick={() => navigate("/sign-up")}
              className="cursor-pointer colorize"
            >
              Create
            </span>
          </p>
          {!isReset && (
            <>
              <p className="line">Or</p>
              <div className="btn-group">
                <button
                  title="Google Sign In"
                  type="button"
                  onClick={signInWithGoogle}
                >
                  <AiOutlineGoogle />
                </button>
                <button
                  title="Github Sign In"
                  type="button"
                  onClick={signInWithGithub}
                >
                  <AiFillGithub />
                </button>
                <button
                  title="Twitter Sign In"
                  onClick={signInWithTwitter}
                  type="button"
                >
                  <AiOutlineTwitter />
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </LoginContainer>
  );
};

const LoginContainer = styled.section`
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
        border: 1px solid #ccc;
        font-family: var(--fonts);
        font-size: 1rem;
        border-radius: 4px;
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
export default Login;
