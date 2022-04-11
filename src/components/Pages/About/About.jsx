import React from "react";
import { MdVideocam } from "react-icons/md";
import styled from "styled-components";
const About = () => {
  return (
    <section id="about">
      <HeroContainer>
        <div className="container">
          <div className="hero-container">
            <div className="hero-text">
              <span>Get your authentication here</span>
              <h1>
                Firebase <span className="colorize">Authentication</span>
              </h1>
              <p>
                Firebase authentication is one of the most powerful features for
                each application and website if you wanna setup authentication
                of your application. please feel free to contact us
              </p>

              <div className="btn-group">
                <button>Get Started</button>
                <a href="/video">
                  <div className="icon">
                    <MdVideocam />
                  </div>
                  Tutorial for started.
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="https://i.ytimg.com/vi/8sGY55yxicA/maxresdefault.jpg"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </HeroContainer>
    </section>
  );
};

const HeroContainer = styled.div`
  position: relative;
  padding: 10rem 0rem;
  .hero-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    gap: 3rem;
    .hero-text {
      h1 {
        font-size: 3rem;
        margin: 0.5rem 0rem;
      }
      p {
        line-height: 1.7;
      }
      .btn-group {
        margin: 1rem 0rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        button {
          background: var(--primary-color);
          color: var(--accent-color);
          border-radius: 4px;
          padding: 0.6rem 2rem;
          position: relative;
          border: none;
          outline: none;
          font-size: 1rem;
          font-family: var(--fonts);
          cursor: pointer;
        }
        a {
          display: flex;
          align-items: center;
          color: var(--primary-color);
          gap: 0.4rem;
          .icon {
            width: 50px;
            height: 50px;
            text-align: center;
            display: grid;
            place-items: center;
            border: 1px solid var(--primary-color);
            font-size: 1.5rem;
            border-radius: 50%;
          }
        }
      }
    }
  }
`;
export default About;
