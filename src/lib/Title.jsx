import React from "react";
import styled from "styled-components";

const Title = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Title;

const Container = styled.h2`
  width: 100%;
  color: white;
  max-width: none;
  min-width: 0;
  margin-bottom: 3px;
  font-size: 5rem;
  text-align: center;
  letter-spacing: -0.04em;
  background-color: inherit;
  font-weight: 600;
  &.font-lato {
    font-family: ${props=>props.theme.fontLato}, sans-serif !important;
    line-height: 44px;
  }
  &.mt-5{
    margin-top: 5rem;
  }
  &.md {
    width: auto;
    max-width: 430px;
    min-width: 0;
    margin-bottom: 3px;
    font-size: 32px;
    text-align: left;
    letter-spacing: -0.04em;
  }
  &.center {
    text-align: center;
  }
  &.gd {
    background: -webkit-linear-gradient(135deg, #8b55d0, #475ac3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &.purple {
    color: ${(props) => props.theme.purple};
  }
  @media screen and (max-width: 992px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    display: block;
    max-width: 100vw;
    font-size: 34px;
    text-align: left;
  }
`;