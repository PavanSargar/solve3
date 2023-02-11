import React from "react";
import styled from "styled-components";
import Button from "../lib/Button";
import Title from "../lib/Title";
import Text from "../lib/Text";
import Img1 from "../assets/whatelse1.svg";
import Img2 from "../assets/whatelse2.svg";
import Img3 from "../assets/whatelse3.svg";

import { Grid, GridItem } from "../lib/Grid";

const WhatElse = () => {
  return (
    <Container className="main">
      <Title className="font-lato mt-5">What else?</Title>
      <Text className="white font-lato small-text">Earn.</Text>
      <Container className="card">
        <Grid container>
          <GridItem xs={12} sm={12} md={4} lg={4}>
            <Container className="img-container">
              <img src={Img1} />
            </Container>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <Container className="text-container">
              <Container className="card-title font-lato">Wait... what?</Container>
              <Text className="card-text left font-lato">
                We figured out a way to bring more to the equation than fairness
                and end-user protection. Right now, Captchas are useful but in
                most cases also annoying. This annoyance stems mainly from users
                interacting with these tools but not getting anything in return.
                <br/>
                <br/>
                That’s why we want to pay users for solving the captchas. Think
                of it in the same way as Brave paying users for their attention
                when advertising notifications. 
                <br/>
                <br/>
                After all, chores seem
                infinitely less tedious when earning money from them, right?
              </Text>
            </Container>
          </GridItem>
        </Grid>
      </Container>
    </Container>
  );
};

export default WhatElse;

const Container = styled.div`
  &.main {
    padding: ${(props) => props.theme.sectionMargin};
    background-color: ${(props) => props.theme.bgGd};
  }
  &.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.card {
    width: 100%;
    height: 615px;
    background: #0d1d35;
    backdrop-filter: blur(101px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 10px;
  }
  &.card-title {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 2.5rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 2rem;
  }
  &.img-container {
    padding: 3rem;
    width: 38rem;
  }
  &.text-container{
    padding: 3rem;
  }
  img {
    width: 100%;
    height: auto;
  }
`;
