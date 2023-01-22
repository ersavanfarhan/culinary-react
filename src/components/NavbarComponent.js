import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark">
      <Container>
        <Brand>Culinary App</Brand>

        <DropdownButton variant="dark" title="Menu">
          <Dropdown.Item href="/culinary-react">Home</Dropdown.Item>
          <Dropdown.Item href="/about">About</Dropdown.Item>
        </DropdownButton>
        
      </Container>
    </Navbar>
  );
}

const Brand = styled.h4`
  color: white;
`;

