import React, { useState } from "react";
import styled from "styled-components";
import Title from "../lib/Title";
import Text from "../lib/Text";
import { Grid, GridItem } from "../lib/Grid";
import Img1 from "../assets/whySolveImg1.svg";
import Img2 from "../assets/whySolveImg2.svg";
import Img3 from "../assets/whySolve-img-3.png";
import Img4 from "../assets/why-solve-img-4.png";
import Img5 from "../assets/why-solve-img-5.png";
import Img6 from "../assets/why-solve-img-6.png";

const WhySolve = () => {
  return (
    <Container className="main">
      <Container className="why-solve-title">
        <Title className="purple font-lato">Why SOLVE3 ?</Title>
        <Text className="bold section-small-text because font-lato">
          Because.
        </Text>
      </Container>
      <Container>
        <Grid container justifyContent="space-between">
          <GridItem xs={12} sm={12} md={5} lg={5}>
            <Container className="main-img-container">
              <img src={Img1} alt="Why Solve 1" />
            </Container>
          </GridItem>

          <GridItem xs={12} sm={12} md={7} lg={7}>
            <Container className="card-container">
              <Container className="card-title">Bots are a Problem</Container>
              <Container className="card-subtitle">
                The faster the bot, the more its owner has to gain
              </Container>
              <Container className="text-pts">
                <Container className="img-container">
                  <Container className="circle pink">
                    <img className="img" src={Img3} />
                  </Container>
                </Container>
                <Container className="text-pts-container">
                  <Container className="text-pts-title">Advantage</Container>
                  <Container className="text-pts-text">
                    Whether in web3 games, limited NFT sales or when buying
                    tickets to your favourite crypto event (see EthCC), bots
                    provide an unfair advantage for some and skewed conditions
                    for participation for others.
                  </Container>
                </Container>
              </Container>

              <Container className="text-pts">
                <Container className="img-container">
                  <Container className="circle blue">
                    <img className="img" src={Img4} />
                  </Container>
                </Container>
                <Container className="text-pts-container">
                  <Container className="text-pts-title">Strength</Container>
                  <Container className="text-pts-text">
                    While it is okay to deploy and utilise the strengths of bots
                    in some areas (i.e. arbitrage trading), in other areas their
                    usage is very problematic.
                  </Container>
                </Container>
              </Container>
            </Container>
          </GridItem>
        </Grid>
        <Container className="gap" />
        <Grid container>
          <GridItem xs={12} sm={12} md={0} lg={0}>
            <Container className="why-solve-img2-mobile main-img-container">
              <img src={Img2} alt="Why Solve 1" />
            </Container>
          </GridItem>

          <GridItem xs={12} sm={12} md={7} lg={7}>
            <Container className="card-container">
              <Container className="card-title">Bots are a business</Container>
              <Container className="card-subtitle">
                Developing, selling and using bots is a lucrative business
                model.
              </Container>
              <Container className="text-pts">
                <Container className="img-container">
                  <Container className="circle green">
                    <img className="img" src={Img5} />
                  </Container>
                </Container>
                <Container className="text-pts-container">
                  <Container className="text-pts-title">Value</Container>
                  <Container className="text-pts-text">
                    The advantage they provide can be expressed in pure $ value.
                    Browsing through fiverr, for example, shows quickly how much
                    money people can earn with making and selling bots. The
                    money generated for those who use the bots is hard to
                    calculate.
                  </Container>
                </Container>
              </Container>

              <Container className="text-pts">
                <Container className="img-container">
                  <Container className="circle blue">
                    <img className="img" src={Img6} />
                  </Container>
                </Container>
                <Container className="text-pts-container">
                  <Container className="text-pts-title">Developers</Container>
                  <Container className="text-pts-text">
                    There are professional bot developers because the current
                    solution for the bot problem are simply more bots.
                  </Container>
                </Container>
              </Container>
            </Container>
          </GridItem>

          <GridItem xs={12} sm={12} md={5} lg={5}>
            <Container className="why-solve-img2-desktop">
              <img src={Img2} alt="Why Solve 1" />
            </Container>
          </GridItem>
        </Grid>
      </Container>
    </Container>
  );
};

export default WhySolve;

const Container = styled.div`
  &.main {
    padding: ${(props) => props.theme.sectionMargin};
    background-color: ${(props) => props.theme.lightBg};

    padding-top: 5rem;

    @media screen and (max-width: 576px) {
      /* padding-top: 0; */
    }

  }
  &.why-solve-title {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &.sub-heading {
    Text {
      color: "#727272";
    }
  }
  &.main-img-container {
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
  &.why-solve-img2-desktop {
    text-align: end;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &.why-solve-img2-mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: block;
    }
  }

  img {
    width: 35rem;
    @media screen and (max-width: 1400px) {
      width: 22rem;
    }
    @media screen and (max-width: 992px) {
      width: 22rem;
    }
    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }
  &.gap {
    margin: 3rem;
    @media screen and (max-width: 768px) {
      margin: 0;
    }
  }
  &.card-title {
    font-family: ${(props) => props.theme.fontLato}, sans-serif !important;
    font-weight: 400;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 992px) {
      font-size: 2rem;
    }
  }
  &.card-subtitle {
    font-family: ${(props) => props.theme.fontLato}, sans-serif !important;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.01em;
    color: #727272;
    margin-bottom: 1rem;
    @media screen and (max-width: 992px) {
      font-size: 1.1rem;
    }
  }
  &.text-pts {
    display: flex;
    flex-direction: row;
    margin-bottom: 2rem;
  }
  &.text-pts-title {
    font-weight: 600;
    font-size: 1.5rem;
    color: #222222;
    margin-bottom: 1rem;
    margin-left: 1rem;
    font-family: ${(props) => props.theme.fontLato}, sans-serif;
    @media screen and (max-width: 992px) {
      font-size: 1.2rem;
    }
  }
  &.text-pts-text {
    margin-left: 1rem;
    font-family: ${(props) => props.theme.fontLato}, sans-serif !important;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 0.01em;
    color: #727272;
    @media screen and (max-width: 992px) {
      font-size: 1.1rem;
    }
  }
  &.img-container {
    width: 50px;
    text-align: center;
    .img {
      width: 50%;
      height: auto;
    }
  }
  &.circle {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    &.pink {
      background-color: #fe66cb33;
    }
    &.blue {
      background-color: #64b5f633;
    }
    &.green {
      background-color: #00efd133;
    }
  }
`;
