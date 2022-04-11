import React from "react";
import styled from "styled-components";
import useHotels from "../../../hooks/useHotels";
import Hotel from "../../Hotel/Hotel";

const Hotels = () => {
  const { hotels } = useHotels();
  return (
    <HotelsContainer>
      <div className="container">
        <div className="title">
          <h1>Shop Here</h1>
          <p>here we will do shopping</p>
        </div>
        <div className="hotels-container">
          {hotels.map((hotel) => (
            <Hotel key={hotel.id} {...hotel} />
          ))}
        </div>
      </div>
    </HotelsContainer>
  );
};

const HotelsContainer = styled.section`
  position: relative;
  .title {
    padding: 0.5rem 1rem;
    background: #f8f8f8;
    border-radius: 5px;
    margin: 1rem 0rem;
  }
  .hotels-container {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 2rem;
    margin: 2rem 0rem;
  }
`;
export default Hotels;
