import React, { useState } from "react";
import styled from "styled-components";
import Button from "../lib/Button";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import LOGO from "../assets/logo.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Nav>
      <Container className="brand">
        <Image src={LOGO} alt="" />
        <div className="content">
          <h1>Solve3!</h1>
          <p>WEB3 CAPTCHA</p>
        </div>

        {/* <Image src={LOGO} alt="" /> */}
      </Container>

      <Container className="nav-items">
        <p>
          <span>
            <a href="#home">Home</a>
          </span>
        </p>
        <p>
          <span>
            <a href="#learnmore">Learn More</a>
          </span>
        </p>
        <p>
          <span>
            <a href="#demo">Demo</a>
          </span>
        </p>
        <p>
          <span>
            <a href="#twitter">Twitter</a>
          </span>
        </p>
      </Container>
      <Container className={`nav-mobile-menu ${isOpen ? "open" : "close"} `}>
        <p>
          <span>
            <a onClick={() => setOpen(false)} href="#home">
              Home
            </a>
          </span>
        </p>
        <p>
          <span>
            <a onClick={() => setOpen(false)} href="#learnmore">
              Learn More
            </a>
          </span>
        </p>
        <p>
          <span>
            <a onClick={() => setOpen(false)} href="#demo">
              Demo
            </a>
          </span>
        </p>
        <p>
          <span>
            <a onClick={() => setOpen(false)} href="#twitter">
              Twitter
            </a>
          </span>
        </p>
      </Container>

      <Container className="buttons">
        <span onClick={() => setOpen(!isOpen)}>
          {isOpen ? <MdClose /> : <FaBars />}
        </span>

        <a href="#products">
          <Button className="nav-btn">Button</Button>
        </a>

        {/* <a href="#contact">
          <Button className="nav-btn bg-dark">Contact Us</Button>
        </a> */}
      </Container>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: relative;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
    rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
  bottom: auto;
  z-index: 999;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 100px;
  padding: 22px 4%;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: none;
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  font-weight: 300;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  &.brand,
  &.nav-items {
    display: flex;
    align-items: center;
    gap: 3.5rem;
    @media screen and (max-width: 992px) {
      gap: 2rem;
    }

    p {
      margin-top: 0.2rem;
    }

    p span {
      transition: 350ms;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;
      cursor: pointer;
      font-family: ${(props) => props.theme.fontSegoe};

      a {
        all: unset;
      }
    }
  }

  &.brand {
    gap: 12px;
    cursor: pointer;

    .content {
      h1 {
        color: #fff;
        text-transform: uppercase;
      }
      p {
        color: #fff;
        font-family: ${props => props.theme.fontSegoe};
      }
    }
  }

  &.nav-items {
    @media screen and (max-width: 992px) {
      margin-left: -2rem !important;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  &.nav-mobile-menu {
    display: none;
    position: fixed;
    z-index: -999;
    left: 0;
    width: 100%;
    /* padding: 12px; */
    background-color: #fff;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */

    @media screen and (max-width: 768px) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 0px;

      /* padding-left: 2rem; */

      p {
        /* margin-top: 0.2rem; */
        padding: 1rem;
        width: 100%;
        cursor: pointer;
        background-color: #fff;

        transition: all 0.3s;

        :hover {
          background-color: ${(props) => props.theme.purple};
          color: #fff !important;
          span {
            color: #fff;
          }
        }
      }

      p span {
        transition: 350ms;
        background-color: transparent;
        color: ${(props) => props.theme.dark};
        font-size: 15px;
        font-weight: 600;
        font-family: ${(props) => props.theme.fontSegoe};

        a {
          all: unset;
        }
      }
    }
  }

  &.open {
    top: 100px;
    transition: all 0.4s;
    z-index: -999;
  }

  &.close {
    top: -300px;
    transition: all 0.4s;
  }

  &.buttons {
    display: flex;
    align-items: center;
    gap: 0rem;

    a {
      all: unset;
    }

    span {
      display: none;
      cursor: pointer;
      padding: 12px 16px;
      font-size: 24px;

      -webkit-tap-highlight-color: transparent;
      tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      border: 1px solid white;
      border-radius: 10px;
      color: #fff;

      :active {
        border-color: transparent;
        background-color: transparent;
        svg {
          background-color: transparent;
          color: ${(props) =>
            props.theme.bgColor ? props.theme.bgColor : "#fff"};
        }
      }

      @media screen and (max-width: 768px) {
        display: inline-block;
        /* margin: 0.5rem 0 0 0; */
        svg {
          margin-top: 0.3rem;
        }
      }
    }
  }
`;

const Image = styled.img`
  width: 48.74px;
  height: 56px;
`;
