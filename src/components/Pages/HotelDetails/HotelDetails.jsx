import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import useHotels from "../../../hooks/useHotels";

const HotelDetails = () => {
  const { hotelId } = useParams();
  const { hotels } = useHotels();
  const findHotel = hotels.find((hotel) => hotel.id.toString() === hotelId);

  return (
    <HotelDetailsContainer>
      <div className="container">
        <div className="title">
          <span className="cursor-pointer"> </span>
          <h1>{findHotel?.name}</h1>
        </div>
        <div className="image">
          <img src={findHotel?.img} alt={findHotel?.name} />
        </div>
        <div className="details">
          <div className="rent">
            <span>{findHotel?.rent} $</span>
            <span className="colorize">{findHotel?.type}</span>
          </div>
          <p>{findHotel?.desc}</p>
        </div>
      </div>
    </HotelDetailsContainer>
  );
};

const HotelDetailsContainer = styled.section`
  position: relative;
  padding: 2rem;
  .container {
    padding: 2rem;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    h1 {
      margin-bottom: 1rem;
    }
    .image {
      width: 100%;
      height: 300px;
      border: 1px solid #ccc;
      background: #566;
      border-radius: 5px;
      margin: 1rem 0rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .rent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    p {
      margin: 1rem 0rem;
      line-height: 1.7;
      color: #566;
    }
  }
`;
export default HotelDetails;
