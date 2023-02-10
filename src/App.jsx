import React, { useState } from 'react'
import styled from 'styled-components'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <Container className="App">
      <Navbar />
      <Hero />
    </Container>
  )
}

export default App


const Container = styled.div`
  h1 {
    color: white;
  }
`
