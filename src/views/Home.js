import React, { Component } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { URL_Image } from "../utils/utils";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Homecontent>
          <h1><strong>Welcome To Culinary App</strong></h1>
          <Image src={URL_Image + "home.png"} alt="home"/>
        </Homecontent>
      </Container>
    );
  }
}

const Homecontent = styled.div`
width: 100%;
  min-height: 75vh;
  padding: 10vw 0vw 10vw 0vw;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 2vw 0vw 2vw 0vw;
  }
`

const Image = styled.img`
width: 100%;
@media screen and (min-width: 992px) {
  width: 40%;
}
`

