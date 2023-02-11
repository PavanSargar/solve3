import React from "react";
import styled from "styled-components";

import star1 from "../assets/stars/star1.svg";
import star2 from "../assets/stars/star2.svg";
import star3 from "../assets/stars/star3.svg";
import star4 from "../assets/stars/star4.svg";
import star5 from "../assets/stars/star5.svg";

let stars = [star1, star2, star3, star4, star5];

const ClientCard = ({ img, focused }) => {
  return (
    <Container focused={focused} className={`card ${focused && "focused"}`}>
      <Container focused={focused} className="card-header">
        <Container focused={focused} className="img-container">
          <img src={img} alt="" />
          <Container focused={focused} className="content">
            <h3>Leo</h3>
            <p>Lead Designer</p>
          </Container>
        </Container>

        <Container focused={focused} className="stars">
          {stars.map((star) => (
            <img className="star" src={star} alt="" />
          ))}
        </Container>
      </Container>

      <Container focused={focused} className="card-body">
        <h3>It was a very good experience</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh
          mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget
          nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis
          felis id augue sit cursus pellentesque enim arcu. Elementum felis
          magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis.
          Consequat duis diam lacus arcu.
        </p>
      </Container>
    </Container>
  );
};

export default ClientCard;

const Container = styled.div`
  &.card {
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.07);
    border-radius: 12px;
    padding: 2rem 1rem;

    width: ${(props) => (props.focused ? "24rem" : "18rem")};
    @media screen and (max-width: 768px) {
      display: ${(props) => (props.focused ? "block" : "none")};
    }

    @media screen and (max-width: 420px) {
      width: 100%;
    }
  }

  &.card-header {
    display: flex;
    align-items: center;
  }

  &.img-container {
    display: flex;
    gap: 6px;
    margin-right: 8px;
    img {
      width: 50px;
      width: ${(props) => (props.focused ? "50px" : "40px")};
      height: auto;
    }
  }

  &.content {
    h3 {
      font-size: ${(props) => (props.focused ? "1.2rem" : "1.1rem")};

      @media screen and (max-width: 420px) {
        font-size: 1.1rem;
      }
    }

    p {
      font-size: ${(props) => (props.focused ? "18px" : "14px")};
      width: ${(props) => (props.focused ? "120px" : "100px")};

      @media screen and (max-width: 420px) {
        font-size: 14px;
      }
    }
  }

  &.card-body {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h3 {
      font-size: ${(props) => (props.focused ? "24px" : "18px")};
      text-align: center;

      @media screen and (max-width: 420px) {
        font-size: 18px;
      }
    }

    p {
      margin-top: 1rem;
      text-align: center;

      font-size: ${(props) => (props.focused ? "18px" : "14px")};
      width: 99%;

      @media screen and (max-width: 420px) {
        font-size: 14px;
      }
    }
  }

  &.stars {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;

    margin-top: 1.4rem;

    margin-left: ${(props) => (props.focused ? "3rem" : ".4rem")};
    @media screen and (max-width: 420px) {
      margin-left: 0.1rem;
    }

    @media screen and (max-width: 360px) {
      margin-left: -1rem;
      margin-top: 1rem;
    }
    .star {
      width: 16px;
      width: ${(props) => (props.focused ? "18px" : "14px")};
      height: auto;

      @media screen and (max-width: 420px) {
        width: 14px;
      }
    }
  }
`;
