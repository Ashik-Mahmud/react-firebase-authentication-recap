import React from "react";
import styled from "styled-components";
import { auth } from "../../../firebase.config";
const CheckOut = () => {
  return (
    <CheckOutContainer>
      <div className="container">
        <h1>Check Out for Rent</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" id="name" />
          </div>
          <div className="input-group">
            <label htmlFor="name">Email</label>
            <input
              type="text"
              value={auth?.currentUser?.email}
              id="name"
              readOnly
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" placeholder="Phone Number" id="phone" />
          </div>
          <div className="input-group">
            <label htmlFor="address">Shipping Address</label>
            <textarea
              name="shipping-address"
              id="address"
              cols="30"
              rows="10"
              placeholder="Shipping Address"
            ></textarea>
          </div>
          <div className="input-group">
            <button className="btn">Send Order</button>
          </div>
        </form>
      </div>
    </CheckOutContainer>
  );
};
const CheckOutContainer = styled.section`
  position: relative;
  h1 {
    text-align: center;
    margin-top: 2rem;
  }

  form {
    position: relative;
    padding: 1rem 10rem;
    position: relative;
    @media (max-width: 668px) {
      margin: 1rem;
    }
    .input-group {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      margin-bottom: 0.5rem;
      input,
      textarea {
        padding: 0.7rem 1rem;
        position: relative;
        border: none;
        outline: none;
        border: 1px solid #ccc;
        font-size: 1rem;
        font-family: var(--fonts);
        border-radius: 5px;
      }
      input[readonly] {
        background-color: #f8f8f8;
      }
    }
  }
`;
export default CheckOut;
