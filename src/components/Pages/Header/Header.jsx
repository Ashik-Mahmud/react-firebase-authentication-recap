import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { BiUserCircle } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../../App";
import { auth } from "../../../firebase.config";
const Header = () => {
  const navigate = useNavigate();
  const { isAuth, user, setIsAuth } = useContext(AuthContext);
  /* handle log out  */
  const handleLogOut = () => {
    signOut(auth).then(() => {
      toast.success("Log Out successfully done.");
      navigate("/login");
      setIsAuth(false);
    });
  };
  return (
    <HeaderContainer id="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            Firebase <span className="colorize">Auth</span>
          </div>
          <menu>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/hotels">Hotels</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/checkout">CheckOut</NavLink>
              </li>
              <li className="user">
                <span>
                  {isAuth && (
                    <>
                      <BiUserCircle />
                      {user?.displayName}
                    </>
                  )}
                </span>
              </li>
              {isAuth ? (
                <li className="logOut-btn" onClick={handleLogOut}>
                  <span className="cursor-pointer">Log Out</span>
                </li>
              ) : (
                <li>
                  <button onClick={() => navigate("/login")} className="btn">
                    Login
                  </button>
                </li>
              )}
            </ul>
          </menu>
        </nav>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  padding: 1.1rem 0rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: wrap;
    .logo {
      font-size: 1.1rem;
      font-weight: bold;
    }
    ul {
      list-style: none;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
      position: relative;
      a {
        color: var(--secondary-color);
        font-size: 1rem;
      }
      a.active {
        color: var(--primary-color);
      }
      .user span {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
      .logOut-btn {
        background-color: salmon;
        color: #fff;
        border-radius: 4px;
        padding: 0.4rem 0.6rem;
        font-size: 0.9rem;
      }
    }
  }
`;
export default Header;
