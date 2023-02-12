import React, { useState } from "react";

import styled from "styled-components";
import ClientCard from "./ClientCard";

import CLIENTIMG from "../assets/client1.svg";

import LEFT from "../assets/left.svg";
import RIGHT from "../assets/right.svg";

let circles = [1, 2, 3, 4, 5];

const Carousel = () => {
  const [cards, setCards] = useState([
    {
      card: "1",
      active: "false",
    },
    {
      card: "2",
      active: "false",
    },
    {
      card: "3",
      active: "false",
    },
    {
      card: "4",
      active: "false",
    },
    {
      card: "5",
      active: "false",
    },
  ]);
  const [currentCircle, setCurrentCirlcle] = useState(0);

  const activeCircleHandler = (e, active) => {
    setCurrentCirlcle(active);
    setCards((pc) =>
      pc.map((card, i) => {
        if (currentCircle === i) {
          return {
            ...card,
            [e.target.id]: !card?.active,
          };
        }
      })
    );
  };

  const handleLeftClick = () => {
    if (currentCircle === 0) {
      setCurrentCirlcle(4);
    } else {
      setCurrentCirlcle((prev) => prev - 1);
    }
  };

  const handleRightClick = () => {
    if (currentCircle === 4) {
      setCurrentCirlcle(0);
    } else {
      setCurrentCirlcle((prev) => prev + 1);
    }
  };
  return (
    <Container className="main">
      <Container className="carousels">
        <ClientCard className="" img={CLIENTIMG} alt="" />
        <ClientCard focused={true} img={CLIENTIMG} alt="" />
        <ClientCard img={CLIENTIMG} alt="" />
      </Container>

      <Container className="controls">
        <img onClick={handleLeftClick} className="left" src={LEFT} alt="" />
        {circles.map((circle, index) => (
          <Circle
            id="active"
            onClick={(e) => activeCircleHandler(e, index)}
            className={index === currentCircle ? "purple" : ""}
            key={circle}
          />
        ))}
        <img onClick={handleRightClick} className="right" src={RIGHT} alt="" />
      </Container>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
  width: 100%;
  background-color: #fff;

  &.carousels {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    flex-wrap: wrap;
  }

  &.controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 0 auto;

    * {
      cursor: pointer;
    }

    .left {
      margin-right: 1.5rem;
    }
    .right {
      margin-left: 1.5rem;
    }
  }
`;

const Circle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #c5c5c5;

  &.purple {
    background-color: ${(props) => props.theme.purple};
  }

  @media screen and (max-width: 576px) {
    width: 15px;
    height: 15px;
  }
`;
