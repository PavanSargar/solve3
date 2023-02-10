import React from "react";
import styled from "styled-components";
import Button from "../lib/Button";
import Title from "../lib/Title";
import Text from "../lib/Text";

const WhatNow = () => {
  return (
    <Container className="main">
      <Title>What now?</Title>
      <Text className="white font-lato small-text">Fairness.</Text>
      <Container className="card-container">
        <Container className="card">
          <Container className="card-title">But How?</Container>
          <Container className="card-text">
            For Developers, solve3 is very easy to implement. For End-Users,
            solve3 is very easy to understand. Solving captchas has become an
            intuitive part of the web2 ecosystem, that is very effective in the
            fight against bots. Solve3 wants to remodel this native web2 tool
            into on that can easily, fairly and elegantly be utilized in web3
            space.
          </Container>
          <Button className="secondary-btn">Learn more</Button>
        </Container>
        <Container className="card">
          <Container className="card-title">Prevent Bot-Overwhelm</Container>
          <Container className="card-text">
            The web3 ideology initially wanted to be very inclusive. Many
            efforts in DeFi are still aiming to include the unbanked people in
            this world and aiming them with financial tooling that they
            otherwise would not have access to.
            <br />
            The recent NFT hype has made a broad aspect of our work noticeable
            mainstream.
            <br /> But for more adoption and inclusion in these emerging
            markets, we need more fairness in its distribution. Helping people
            gain access by preventing them from competing with bots is our main
            purpose.
          </Container>
          <Button className="secondary-btn">Learn more</Button>
        </Container>
      </Container>
    </Container>
  );
};

export default WhatNow;

const Container = styled.div`
  &.main {
    padding: ${(props) => props.theme.sectionMargin};
    background-color: ${(props) => props.theme.bgGd};
  }
  &.card-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    gap: 100px;
  }
  &.card {
    padding: ${(props) => props.theme.sectionMargin};
    width: 650px;
    height: 700px;
    background: #0d1d35;
    backdrop-filter: blur(101px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 10px;
  }
  &.card-title {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 28px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 30px;
  }
  &.card-text {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 22px;
    line-height: 35px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 60px;
  }
`;
