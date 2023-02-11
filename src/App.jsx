import React, { useState } from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WhySolve from "./components/WhySolve";
import WhatNow from "./components/WhatNow";
import WhatElse from "./components/WhatElse";
import AboutProject from "./components/AboutProject";
import Footer from "./components/Footer";
import Protect from "./components/Protect";
import Carousel from "./components/Carousel";

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Hero />
      <div className="line" />
      <AboutProject />
      <div className="line" />

      <WhySolve />
      <div className="line" />

      <WhatNow />
      <div className="line" />

      <WhatElse />
      <div className="line" />

      <Protect />
      <div className="line" />

      <Carousel />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
  .line {
    @media screen and (max-width: 576px) {
      border: 0.5px solid rgba(255, 255, 255, 0.5);
      transform: rotate(-0.28deg);
      width: 95%;
      margin: 0 auto;
    }
  }
`;
