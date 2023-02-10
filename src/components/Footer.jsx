import React from "react";
import styled from "styled-components";

import Button from "../lib/Button";
import Text from "../lib/Text";
import { Grid, GridItem } from "../lib/Grid";

const Footer = () => {
  return (
    <Container className="main">
      <Grid alignItems="center" container>
        <GridItem className="" xs={12} sm={12} md={6} lg={6}>
          <Text className="white footer-text">Get the latest updates. </Text>
          <Text className="white footer-text">
            Subscribe for our newsletter
          </Text>
        </GridItem>
        <GridItem className="" xs={12} sm={12} md={6} lg={6}>
          <Container className="input">
            <input placeholder="Enter your email" type="text" />
            <Button className="sub-btn">Subscribe</Button>
          </Container>
        </GridItem>
      </Grid>

      <div className="hr"></div>

      <Container className="footer-details">
        <span>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms and Conditions</a>
        </span>
        <span className="copy">© Solve3. 2023 All rights reserved</span>
      </Container>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  &.main {
    padding: ${({ theme }) => theme.sectionMargin};
    background-color: ${({ theme }) => theme.cardBg};
  }

  &.footer-details {
    margin-top: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span a {
      all: unset;
      color: #fff;
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.7);
      display: flex;
      gap: 2rem;
    }

    @media screen and (max-width: 576px) {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 2rem;
      span {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        margin-top: 1rem;
      }
    }
  }

  &.input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6rem;

    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    width: 100%;
    height: 4rem;

    margin-top: 1rem;

    input {
      all: unset;
      width: 20vw;
      color: #fff;
      font-family: ${(props) => props.theme.fontLato};
      width: 100%;
    }
  }

  .hr {
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
`;
