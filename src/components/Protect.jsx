import React from "react";
import styled from "styled-components";
import Title from "../lib/Title";
import Text from "../lib/Text";
import Img from "../assets/protectImg.svg";

const Protect = () => {
  return (
    <Container className="main">
      <Title className="font-lato mt-5 section-title">Protect</Title>
      <Text className="protect-sub-title">
        BOOT PROTECTION FOR SMART CONTRACTS
      </Text>
      <Text className="white left protect-para">
        Instead of interacting with the smart contract directly, a user has to
        solve a captcha before executing the transaction. Therefore the user
        needs to sign a message, based on the signed message a captcha is
        created
      </Text>
      <Text className="protect-para-mobile white">
        Instead of interacting with the smart contract directly, a user has to
        solve a captcha before executing the transaction. Therefore the user
        needs to sign a message, based on the signed message a captcha is
        created.
      </Text>
      <Container className="img-text-container">
        <Container className="text-container">
          <Text className="white left protect-para">
            Instead of interacting with the smart contract directly, a user has
            to solve a captcha before executing the transaction. Therefore the
            user needs to sign a message, based on the signed message a captcha
            is created.
          </Text>
        </Container>
        <Container className="img-container">
          <img src={Img} alt="protect-img" />
        </Container>
      </Container>
    </Container>
  );
};

export default Protect;

const Container = styled.div`
  &.main {
    padding: ${(props) => props.theme.sectionMargin};
    background-color: ${(props) => props.theme.bgGd};
  }

  &.img-text-container {
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
  }
  &.text-container {
    width: 60%;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &.img-container {
    margin: 0 3rem 0 2rem;
    @media screen and (max-width: 768px) {
      margin: 0;
    }
    img {
      width: 500px;
      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;
