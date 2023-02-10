import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <Container>
        <h1>Hero</h1>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    padding: ${props => props.theme.sectionMargin};
`