import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
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
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li className="user">
                <span>
                  <BiUserCircle />
                  Ashik Mahmud
                </span>
              </li>
              <li className="logOut-btn">
                <span className="cursor-pointer">Log Out</span>
              </li>
            </ul>
          </menu>
        </nav>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  padding: 1rem 0rem;
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