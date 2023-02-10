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
  transition: all .3s ;

  :hover {
    -webkit-transform: translate(0, -2px);
    -ms-transform: translate(0, -2px);
    transform: translate(0, -2px);
  }

  &.nav-btn {
    padding: .8rem 3.5rem;
    border: 1px solid ${(props) => props.theme.purple};
    border-radius: 6px;
    color: ${(props) => props.theme.purple};
    font-weight: bold;
    @media screen and (max-width: 768px) {
      display: none;
    }
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
`;
