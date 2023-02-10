import React, { useState } from "react";
import styled from "styled-components";
import Title from "../lib/Title";
import Text from "../lib/Text";
import { Grid, GridItem } from "../lib/Grid";
import Img1 from "../assets/whysolve1.svg";

const WhySolve = () => {
  return (
    <Container className="main">
      <Title className="purple font-lato">Why SOLVE3 ?</Title>
      <Text className="bold">Because.</Text>
      <Grid container className="border">
        <GridItem xs={12} sm={12} md={6} lg={6} className="border">
          <Container>
            <Container className="transparent-box"></Container>
            <Container>
              <img src={Img1} alt="Why Solve 1" />
            </Container>
          </Container>
        </GridItem>
        <GridItem xs={12} sm={12} md={6} lg={6} className="border">
          <Text className="left">Bots are a Problem</Text>
          <Container className="sub-heading">
            <Text className="left">
              The faster the bot, the more its owner has to gain
            </Text>
          </Container>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default WhySolve;

const Container = styled.div`
  &.main {
    padding: ${(props) => props.theme.sectionMargin};
    background-color: ${(props) => props.theme.lightBg};
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
`;
