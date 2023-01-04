import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { numberWithCommas } from "../utils/utils";
import { URL_Image } from "../utils/utils";

// Food Card Components//
export class FoodCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/foods")
      .then((res) => {
        const foods = res.data;
        this.setState({ foods });
        // console.log("response", foods);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { foods } = this.state;
    return (
      <Container>
        {foods &&
          foods.map((foods, index) => (
            <Link
              to={"/foods/" + foods.id}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <Card>
                <Image src={URL_Image + foods.gambar} alt="food" />
                <Text>
                  <h5 className="food-name"> {foods.nama} </h5>
                  <h6> Rp {numberWithCommas(foods.harga)} </h6>
                </Text>
              </Card>
            </Link>
          ))}
      </Container>
    );
  }
}

// Beverage Card Components //
export class BeverageCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beverages: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/beverages")
      .then((res) => {
        const beverages = res.data;
        this.setState({ beverages });
        // console.log("response", beverages);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { beverages } = this.state;
    return (
      <Container>
        {beverages &&
          beverages.map((beverages, index) => (
            <Link
              to={"/beverages/" + beverages.id}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <Card>
                <Image src={URL_Image + beverages.gambar} alt="food" />
                <Text>
                  <h5 className="food-name"> {beverages.nama} </h5>
                  <h6> Rp {numberWithCommas(beverages.harga)} </h6>
                </Text>
              </Card>
            </Link>
          ))}
      </Container>
    );
  }
}

// Card Card Components //
export class SnackCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snacks: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3004/snacks")
      .then((res) => {
        const snacks = res.data;
        this.setState({ snacks });
        // console.log("response", snacks);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { snacks } = this.state;
    return (
      <Container>
        {snacks &&
          snacks.map((snacks, index) => (
            <Link
              to={"/snacks/" + snacks.id}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <Card>
                <Image src={URL_Image + snacks.gambar} alt="food" />
                <Text>
                  <h5 className="food-name"> {snacks.nama} </h5>
                  <h6> Rp {numberWithCommas(snacks.harga)} </h6>
                </Text>
              </Card>
            </Link>
          ))}
      </Container>
    );
  }
}

const Container = styled.div`
  width: 100%;
  display: grid;
  padding-top: 1vw;
  padding-bottom: 5vw;
  gap: 2vw;

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: #043927;
  border-radius: 1rem;
  text-align: center;
  color: white;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0vw 0vw 1vw black;
  }
`;

const Image = styled.img`
  width: 100%;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;

  @media screen and (max-width: 576px) {
    height: 32vh;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 20vh;
  }

  @media screen and (min-width: 768px) {
    height: 32vh;
  }
`;

const Text = styled.div`
  padding: 1vw;
`;
