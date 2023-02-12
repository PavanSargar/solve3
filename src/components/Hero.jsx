import React from "react";
import styled from "styled-components";
import BGIMG from "../assets/solve3-bg.svg";
import Text from "../lib/Text";
import Title from "../lib/Title";
import Button from "../lib/Button";
import AboutProject from "./AboutProject";

const Hero = () => {
  return (
    <Container className="main">
      <Title className="hero-title">
        Hi, I’m <span className="bold">SOLVE3.</span>
      </Title>
      <Title className="hero-text">Smart Contract Bot Protection</Title>
      <Text className="hero-description">
        The first service that protects smart contracts against bots to ensure
        that bots don't get an unfair advantage of web3 projects.
      </Text>
      <br />
      <img src={BGIMG} alt="" />

      <Container className="btn-container">
        <Button className="sub-btn">Get Started</Button>
        <Button className="blue-btn">Twitter</Button>
      </Container>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  &.main {
    margin-top: 1rem;
    padding: ${(props) => props.theme.sectionMargin};
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 576px) {
      margin-bottom: -8rem;
    }
  }

  img {
    width: 100%;
    height: auto;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.btn-container {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
  }
`;
