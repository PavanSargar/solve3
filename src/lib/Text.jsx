import React from "react";
import styled from "styled-components";

const Text = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Text;

const Container = styled.p`
  /* width: 100%; */
  max-width: none;
  padding-right: 0;
  font-family: Poppins, sans-serif;
  color: #0a1424;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  &.md {
    font-size: 20px;
  }
  &.mb-3 {
    margin-bottom: 3rem;
  }
  &.gd,
  .gd {
    background: -webkit-linear-gradient(135deg, #8b55d0, #475ac3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &.white {
    color: ${(props) => props.theme.bgColorWhite};
  }
  &.link {
    cursor: pointer;
  }
  &.left {
    text-align: left;
  }

  &.footer-text {
    font-size: 1.8rem;
    text-align: left;
  }

  &.small-text {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 4rem;
    margin-bottom: 4rem;
    text-align: center;
    &.because {
      margin-top: 2rem;
    }
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
  &.what-now-card-title {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 28px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
  }
  &.what-now-card-text {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 22px;
    line-height: 35px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.1rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 14px;
      line-height: 1.4;
    }
  }

  &.what-now-text {
    margin-bottom: 3rem;
  }

  &.bold,
  .bold {
    font-weight: bold;
  }
  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }

  @media screen and (max-width: 768px) {
    &.footer-text {
      text-align: center;
      font-size: 2rem;
    }
  }
`;
