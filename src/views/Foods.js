import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {FoodCard} from '../components/ProductCard'

export default class Foods extends Component {
  render() {
    return (
        <Container className='mt-3'>
            <h1><strong>Food Products</strong></h1>
            <FoodCard />
        </Container>
    )
  }
}
