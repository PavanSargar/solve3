import React, { useState } from "react";
import styled from "styled-components";
import Title from "../lib/Title";
import Text from "../lib/Text";
import { Grid, GridItem } from "../lib/Grid";
import Img1 from "../assets/whysolve1.svg";
import Img2 from "../assets/whysolve2.svg";

const WhySolve = () => {
  return (
    <Container className="main">
      <Title className="purple font-lato">Why SOLVE3 ?</Title>
      <Text className="bold small-text font-lato">Because.</Text>
      <Container>
        <Grid container>
          <GridItem xs={12} sm={12} md={5} lg={5}>
            <Container>
              <img src={Img1} alt="Why Solve 1" />
              <TransparentBox1 />
            </Container>
          </GridItem>

          <GridItem xs={12} sm={12} md={7} lg={7}>
            <Container className="card-container">
              <Container className="card-title">Bots are a Problem</Container>
              <Container className="card-subtitle">
                The faster the bot, the more its owner has to gain
              </Container>
              <Container className="text-pts">
                <Container className="img-container">csc</Container>
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
                <Container className="img-container">csc</Container>
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
        <Grid container >
          <GridItem xs={12} sm={12} md={7} lg={7} >
            <Container className="card-container">
              <Container className="card-title">Bots are a business</Container>
              <Container className="card-subtitle">
                Developing, selling and using bots is a lucrative business
                model.
              </Container>
              <Container className="text-pts">
                <Container className="img-container">csc</Container>
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
                <Container className="img-container">csc</Container>
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
            <Container>
              <img src={Img2} alt="Why Solve 1" />
              <TransparentBox2 />
            </Container>
          </GridItem>
        </Grid>
      </Container>
    </Container>
  );
};

export default WhySolve;

const Container = styled.div`
    &.main  {
    padding: ${(props) => props.theme.sectionMargin};
    background-color: ${(props) => props.theme.lightBg};
  }
  &.sub-heading {
    Text {
      color: "#727272";
  }
  &.transparent-box {
    position: "absolute";
    background-color: "#8C00FF33";
    height: "300px";
    width: "450px";
    transform: "rotate(15deg)";
    top: "400px";
    left: "170px";
  }
  &.sub-heading {
    Text {
      color: "#727272";
    }
    }
  img {
    position: relative;
    z-index: 2;
    width: 45rem;
  }
  &.card-container {
    margin: 2rem;
  }
  &.card-title {
    font-family: ${(props) => props.theme.fontLato}, sans-serif !important;
    font-weight: 400;
    font-size: 2.5rem;
    /* margin-top: 1rem; */
    margin-bottom: 1rem;
  }
  &.card-subtitle {
    font-family: ${(props) => props.theme.fontLato}, sans-serif !important;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.01em;
    color: #727272;
    margin-bottom: 1rem;
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
  }
  &.text-pts-text {
    font-family: ${(props) => props.theme.fontLato}, sans-serif !important;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.01em;
    color: #727272;
  }
  &.img-container {
    width: 10%;
  }
`;

const TransparentBox1 = styled.div`
  position: relative;
  /* border: 2px solid red; */
  background-color: #8c00ff33;
  height: 20rem;
  width: 35rem;
  transform: rotate(15deg);
  top: -270px;
  filter: blur(2px);
  border-radius: 15px;
  left: 15%;
  z-index: 1;
`;
const TransparentBox2 = styled.div`
  position: relative;
  background-color: #8c00ff33;
  height: 20rem;
  width: 35rem;
  transform: rotate(-15deg);
  top: -270px;
  filter: blur(2px);
  border-radius: 15px;
  left: 5%;
  z-index: 1;
`;
