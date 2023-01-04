import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <HeaderNav>
          <BreadcrumbMenu>
            <Link to="foods" style={{ color: "black", textDecoration: "none" }}>
              Foods
            </Link>
            <label>/</label>
            <Link
              to="beverages"
              style={{ color: "black", textDecoration: "none" }}
            >
              Beverages
            </Link>
            <label>/</label>
            <Link
              to="snacks"
              style={{ color: "black", textDecoration: "none" }}
            >
              Snacks
            </Link>
          </BreadcrumbMenu>
          <BreadcrumbMenu>
            <Link to="cart" style={{ color: "black"}}>
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
          </BreadcrumbMenu>
        </HeaderNav>
      </Container>
    );
  }
}

const HeaderNav = styled.div`
  display: flex;
  margin-top: 2vh;
  justify-content: space-between;
  border-bottom: 0.5vh solid #043927;
`;

const BreadcrumbMenu = styled.div`
  padding: 1vh 0vh;
  display: flex;
  gap: 1vw;
`;
