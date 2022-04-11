import React from "react";
import styled from "styled-components";
import useHotels from "../../../hooks/useHotels";
import Hero from "../../Hero/Hero";
import Hotel from "../../Hotel/Hotel";
const Home = () => {
  const { hotels } = useHotels();
  return (
    <section id="home">
      <Hero />
      <FeaturedHotelsRoomContainer>
        <div className="container">
          <div className="title">
            <span>Get you best hotels</span>
            <h2>
              Featured <span className="colorize">Hotels </span>
            </h2>
          </div>
          <div className="featured-hotels-container">
            {hotels.slice(0, 3).map((hotel) => (
              <Hotel key={hotel.id} {...hotel} />
            ))}
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
  .featured-hotels-container {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 1rem;
    margin: 2rem 0rem;
  }
`;
export default Home;
