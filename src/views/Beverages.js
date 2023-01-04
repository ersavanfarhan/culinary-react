import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {BeverageCard} from '../components/ProductCard'

export default class Beverages extends Component {
  render() {
    return (
        <Container className='mt-3'>
            <h1><strong>Beverage Products</strong></h1>
            <BeverageCard />
        </Container>
    )
  }
}
