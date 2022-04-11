import React from "react";
import styled from "styled-components";
import Hero from "../../Hero/Hero";
import Hotel from "../../Hotel/Hotel";
const Home = () => {
  return (
    <section id="home">
      <Hero />
      <FeaturedHotelsRoomContainer>
        <div className="container">
          <div className="title">
            <span>Get you best hotels</span>
            <h2>
              Featured <span className="colorize">Hotels</span>
            </h2>
          </div>
          <div className="featured-hotels-container">
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
          </div>
        </div>
      </FeaturedHotelsRoomContainer>
    </section>
  );
};

const FeaturedHotelsRoomContainer = styled.div`
  position: relative;
  .title {
    text-align: center;
    margin: 1rem 0rem;
    h2 {
      font-size: 2rem;
    }
  }
`;
export default Home;
