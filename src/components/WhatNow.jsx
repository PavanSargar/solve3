import React from "react";
import styled from "styled-components";
import Button from "../lib/Button";
import Title from "../lib/Title";
import Text from "../lib/Text";
import { Grid, GridItem } from "../lib/Grid";

const WhatNow = () => {
  return (
    <Container className="main">
      <Title className="font-lato mt-5 section-title">What now?</Title>
      <Text className="white font-lato section-small-text">Fairness.</Text>
      <Grid container alignItems="center" justifyContent="center">
        <GridItem xs={12} sm={12} md={5} lg={5} className="what-now-card">
          <Text className="what-now-card-title left">But How?</Text>
          <Text className="what-now-card-text left what-now-text">
            For Developers, solve3 is very easy to implement. For End-Users,
            solve3 is very easy to understand. Solving captchas has become an
            intuitive part of the web2 ecosystem, that is very effective in the
            fight against bots. Solve3 wants to remodel this native web2 tool
            into on that can easily, fairly and elegantly be utilized in web3
            space.
          </Text>
          <Button className="secondary-btn">Learn more</Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={5} lg={5} className="what-now-card">
          <Text className="what-now-card-title left">
            Prevent Bot-Overwhelm
          </Text>
          <Text className="what-now-card-text left what-now-text">
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
          </Text>
          <Button className="secondary-btn">Learn more</Button>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default WhatNow;

const Container = styled.div`
  &.main {
    padding: ${(props) => props.theme.sectionMargin};
    background-color: ${(props) => props.theme.bgGd};
  }
`;
