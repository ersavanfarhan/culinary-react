import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class About extends Component {
  render() {
    return (
      <Container style={{ minHeight: "70vh" }}>
        <h1 className='mt-3'><strong>About</strong></h1>
        <div style={{ textAlign: "center" }}>
        <p>This web application was created to demonstrate an online food application work flow using react js as its library.</p>
        </div>
      </Container>
    )
  }
}
