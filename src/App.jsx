import React, { useState } from 'react'
import styled from 'styled-components'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import WhySolve from './components/WhySolve'

function App() {
  return (
    <Container className="App">
      <Navbar />
      {/* <Hero /> */}
      <WhySolve />
    </Container>
  )
}

export default App


const Container = styled.div`
  h1 {
    color: white;
  }
`
