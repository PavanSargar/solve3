import React from "react";
import styled from "styled-components";
import Title from "../lib/Title";
import Text from "../lib/Text";
import Img1 from "../assets/whatelse1.svg";
import Img2 from "../assets/whatelse2.svg";
import Img3 from "../assets/whatelse3.svg";
import { Grid, GridItem } from "../lib/Grid";

const WhatElse = () => {
  return (
    <Container className="main">
      <Title className="font-lato mt-5 section-title">What else?</Title>
      <Text className="white font-lato section-small-text">Earn.</Text>
      <Container className="card">
        <Grid container>
          <GridItem xs={12} sm={12} md={4} lg={4}>
            <Container className="img-container">
              <img src={Img1} />
            </Container>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <Container className="text-container">
              <Container>
                <Container className="card-title font-lato">
                  Wait... what?
                </Container>
                <Text className="what-now-card-text left font-lato">
                  We figured out a way to bring more to the equation than
                  fairness and end-user protection. Right now, Captchas are
                  useful but in most cases also annoying. This annoyance stems
                  mainly from users interacting with these tools but not getting
                  anything in return.
                  <br />
                  <br />
                  That’s why we want to pay users for solving the captchas.
                  Think of it in the same way as Brave paying users for their
                  attention when advertising notifications.
                  <br />
                  <br />
                  After all, chores seem infinitely less tedious when earning
                  money from them, right?
                </Text>
              </Container>
            </Container>
          </GridItem>
        </Grid>
      </Container>

      <Container className="card">
        <Grid container>
          <GridItem xs={12} sm={12} md={4} lg={4}>
            <Container className="img-container">
              <img src={Img2} alt="img-2" />
            </Container>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <Container className="text-container">
              <Container>
                <Container className="card-title font-lato">
                  But who'd pay for that?
                </Container>
                <Text className="what-now-card-text left font-lato">
                  If we want to pay users for their attention and interaction,
                  the question of where the money comes from is legitimate.
                  That’s why we want to directly connecting marketing efforts
                  and payouts for end-users with solve3.
                  <br />
                  <br />
                  Aside from being a puzzle, a captcha can also be a marketing
                  medium. Businesses or individuals can rent captcha images like
                  they can rent billboards across town. As a provider of these
                  services, solve3 takes a small percentage of this income,
                  while distributing the rest to the users solving the captchas.
                </Text>
              </Container>
            </Container>
          </GridItem>
        </Grid>
      </Container>

      <Container className="card">
        <Grid container>
          <GridItem xs={12} sm={12} md={4} lg={4}>
            <Container className="img-container">
              <img src={Img3} alt="img-3" />
            </Container>
          </GridItem>
          <GridItem xs={12} sm={12} md={8} lg={8}>
            <Container className="text-container">
              <Container>
                <Container className="card-title font-lato">TLDR;</Container>
                <Text className="what-now-card-text left font-lato">
                  SOLVE3 does not only protects smart contracts from bot, users
                  can also earn token by solving sponsored captchas.
                </Text>
              </Container>
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
    width: auto;
    padding: 3rem;
    height: auto;
    background: #0d1d35;
    backdrop-filter: blur(101px);
    margin-bottom: 1.5rem;
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 10px;
    @media screen and (max-width: 768px) {
      padding: 1rem;
      margin: 0 0 2rem 0;
    }
  }
  &.card-title {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 2.5rem;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.7rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 1.5rem;
    }
  }
  &.img-container {
    width: auto;
    @media screen and (max-width: 768px) {
    }
  }
  &.text-container {
    padding-left: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
      padding: 0;
      padding-top: 2rem;
    }
  }
  img {
    width: 100%;
    height: auto;
  }
`;
