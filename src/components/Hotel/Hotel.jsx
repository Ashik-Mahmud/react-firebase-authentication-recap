import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Hotel = ({ id, name, img, type, rent }) => {
  const navigate = useNavigate();
  return (
    <HotelContainer>
      <div className="image">
        {img ? <img src={img} alt={name} /> : "Loading...."}
      </div>
      <div className="details">
        <h3>{name}</h3>
        <div className="info">
          <span>{rent}$</span>
          <span className="colorize">{type}</span>
        </div>
        <button onClick={() => navigate(`/hotel/${id}`)} className="btn btn-sm">
          Book Now
        </button>
      </div>
    </HotelContainer>
  );
};
const HotelContainer = styled.div`
  position: relative;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.08);
  padding: 0.7rem;
  border-radius: 5px;
  .image {
    height: 250px;
    overflow: hidden;
    border-radius: 5px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .details {
    margin: 0.2rem 0rem;
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0.2rem 0rem;
    }
    button.btn-sm {
      padding: 0.4rem 1rem;
    }
  }
`;
export default Hotel;
