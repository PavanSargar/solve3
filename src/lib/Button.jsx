import React from "react";
import styled from "styled-components";

const Button = ({ children, isDisabled, className }) => {
  return (
    <Container
      isDisabled={isDisabled}
      disabled={isDisabled}
      className={className}
    >
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  all: unset;
  transition: all 0.3s;
  position: relative;
  z-index: 10;


  &.nav-btn {
    padding: 0.8rem 3.5rem;
    border: 1px solid ${(props) => props.theme.purple};
    border-radius: 6px;
    color: ${(props) => props.theme.purple};
    font-weight: bold;
    @media screen and (max-width: 768px) {
      display: none;
    }

    :hover {
    -webkit-transform: translate(0, -2px) !important;
    -ms-transform: translate(0, -2px) !important;
    transform: translate(0, -2px) !important;
  }
  }

  &.sub-btn {
    padding: 0.9rem 2.5rem;
    background: ${(props) => props.theme.purple};
    border-radius: 6px;
    color: #fff;
  }

  &.blue-btn {
    padding: 0.9rem 2.5rem;
    border-radius: 6px;
    color: #fff;
    background-color: ${(props) => props.theme.blueBg};
  }

  &.secondary-btn {
    padding: 0.8rem 3.5rem;
    background-color: #0d1d35;
    border: 1px solid ${(props) => props.theme.bgColorWhite};
    border-radius: 6px;
    color: ${(props) => props.theme.bgColorWhite};
  }
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};

  a {
    all: unset;
  }

  &.full-width {
    display: block;
    width: 100%;
  }

  &.bg-dark {
    background-color: #212024;
    background-image: none;
  }

  &.card-btn {
    margin-right: 0px;
    padding: 10px 20px;
  }


  :hover {
    -webkit-transform: translate(0, -2px) !important;
    -ms-transform: translate(0, -2px) !important;
    transform: translate(0, -2px) !important;
  }
`;
