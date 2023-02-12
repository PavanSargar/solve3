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
  &.font-lato {
    font-family: ${(props) => props.theme.fontLato}, sans-serif !important;
  }
  &.mb-3 {
    margin-bottom: 3rem;
  }
  &.gd,
  .gd {
    background: -webkit-linear-gradient(135deg, #8b55d0, #475ac3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: trfansparent;
  }
  &.white {
    color: ${(props) => props.theme.bgColorWhite};
  }
  &.link,
  .link {
    all: unset;
    cursor: pointer;
    text-decoration: none;
  }
  &.left {
    text-align: left;
  }

  &.footer-text {
    font-size: 1.8rem;
    text-align: left;
  }

  &.section-small-text {
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
  &.protect-sub-title {
    color: #8c00ff;
    font-size: 1.2rem;
    text-align: left;
    margin: 4rem 0 1rem 0;
    @media screen and (max-width: 768px) {
      text-align: center;
      margin: 2rem 0 2rem 0;
    }
  }
  &.protect-para {
    font-size: 1.2rem;
    line-height: 40px;
    @media screen and (max-width: 768px) {
      line-height: 1.4;
      font-size: 1rem;
    }
  }
  &.protect-para-mobile {
    display: none;
    @media screen and (max-width: 768px) {
      display: flex;
      margin-bottom: 1.5rem;
      line-height: 1.4;
      font-size: 1rem;
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

  &.about-text {
    font-size: 16px;
    line-height: 30px;
    text-align: left;
    color: #d9d9d9;
    letter-spacing: 0.03em;

    .purple {
      color: ${(props) => props.theme.purple};
      font-weight: bold;
    }
  }

  &.about-sub-text {
    font-size: 24px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0.03em;
    text-align: left;
    color: #ffffff;
  }

  &.hero-description {
  

    letter-spacing: 0.03em;
    color: rgba(255, 255, 255, 0.6);
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    width: 65%;

    @media screen and (max-width: 576px) {
      font-size: 1rem;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: left;

    &.footer-text {
      text-align: center;
      font-size: 2rem;
    }
  }
  @media screen and (max-width: 400px) {
    &.footer-text {
      font-size: 1.5rem;
    }
  }
`;
