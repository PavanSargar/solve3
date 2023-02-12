import React from "react";
import styled from "styled-components";
import Title from "../lib/Title";
import { Grid, GridItem } from "../lib/Grid";
import Text from "../lib/Text";
import Button from "../lib/Button";

import IMG1 from "../assets/about1.svg";

const AboutProject = () => {
  return (
    <Container className="main">
      <Grid container>
        <GridItem xs={12} sm={12} md={8} lg={8}>
          <Title className="about-title">
            About the <span className="purple">project.</span>
          </Title>
          <Text className="about-text">
            <span className="purple">SOLVE3</span> was built during the Polygon
            Buidl It hackathon (2022) and is therefore still very early. It was
            fun to buidl and we think there is a market for a service like
            SOLVE3.The <a href="https://demo.solve3.org/" target="_blank" className="link bold">demo</a> is at a proof of concept level and there is still a
            lot of development to be done.
          </Text>
          <Container className="img-container">
            <img className="mobile" src={IMG1} alt="" />
          </Container>
          <Container className="whats-next">
            <Text className="about-sub-text">What's next?</Text>
            <Text className="about-text">
              We are looking forward to bring up a public beta during the next
              few weeks. During this time we want to find projects as beta
              testers to find out what we can improve and how it is accepted by
              the users.‍ The opinion of the community is very important to us,
              if you also want to tell us your opinion, please contact us on
              <a href="https://twitter.com/Solve3_org" target="_blank" className="purple link"> Twitter.</a>
            </Text>
          </Container>
          <Container className="btn-container">
            <Button className="sub-btn">Learn More</Button>
          </Container>
        </GridItem>
        <GridItem xs={12} sm={12} md={4} lg={4}>
          <Container className="img-container">
            <img className="desktop" src={IMG1} alt="" />
          </Container>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default AboutProject;

const Container = styled.div`
  &.main {
    padding: ${(props) => props.theme.sectionMargin};
    margin-bottom: 4rem;

    @media screen and (max-width: 576px) {
      margin-bottom: 0;
    }
  }

  &.whats-next {
    margin: 3rem 0 2rem 1rem;
    @media screen and (max-width: 768px) {
      margin: 2rem auto;
    }
  }

  &.btn-container {
    @media screen and (max-width: 768px) {
      /* margin-left: 2.5rem; */
    }
  }

  &.img-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 768px) {
      justify-content: center;
      margin: 2rem auto;
    }

    .desktop {
      width: 75%;
      height: auto;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .mobile {
      display: none;
      width: 75%;
      height: auto;

      @media screen and (max-width: 768px) {
        display: flex;
      }
    }
  }
`;
