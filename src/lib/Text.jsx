import React from "react";
import styled from "styled-components";

const Text = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Text;

const Container = styled.p`
  width: 100%;
  max-width: none;
  padding-right: 0;
  font-family: Poppins, sans-serif;
  color: #5a5761;
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  &.md {
    font-size: 20px;
  }
  &.gd, .gd {
    background: -webkit-linear-gradient(135deg, #8b55d0, #475ac3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &.white {
    color: ${(props) => props.theme.bgColor};
  }
  &.bold, .bold {
    font-weight: bold;
  }
  &.link {
    cursor: pointer;
  }
  &.left {
    text-align: left;
  }
  @media screen and (max-width: 992px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: left;
  }
`;