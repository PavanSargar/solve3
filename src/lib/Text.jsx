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
  &.mb-3{
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
  &.small-text {
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    margin-top: 4rem;
    margin-bottom: 4rem;
    text-align: center;
  }
  &.card-title {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 28px;
    font-weight: 700;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 2rem;
  }
  
  &.card-text {
    color: ${(props) => props.theme.bgColorWhite};
    font-size: 22px;
    line-height: 35px;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 60px;
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
`;
