import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { SnackCard } from "../components/ProductCard";

export default class Snacks extends Component {
  render() {
    return (
      <Container className="mt-3">
        <h1>
          <strong>Snack Products</strong>
        </h1>
        <SnackCard />
      </Container>
    );
  }
}
