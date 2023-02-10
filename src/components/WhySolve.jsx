import React, { useState } from "react";
import styled from "styled-components";
import Button from "../lib/Button";
import Title from "../lib/Title";
import Text from "../lib/Text";
import { Grid, GridItem } from "../lib/Grid";

const WhySolve = () => {
    return(
        <Container>
            <Title className="purple font-lato">Why SOLVE3 ?</Title>
            {/* <Text>Because.</Text> */}
            <Grid container className="border">
                <GridItem xs={12} sm={12} md={6} lg={6} className="border">
                    <Text>Left</Text>
                </GridItem>
                <GridItem xs={12} sm={12} md={6} lg={6} className="border">
                    <Text>Right</Text>
                </GridItem>
            </Grid>
        </Container>
    );
}

export default WhySolve;



const Container = styled.div`
  padding: ${(props) => props.theme.sectionMargin};
  background-color: ${(props) => props.theme.lightBg};
`;