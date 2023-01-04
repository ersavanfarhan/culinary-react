import React from "react";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Navbar bg="dark" style={{ height: "12vh" }}>
      <Text>
        <Copy>
          <span className="material-symbols-outlined">copyright</span>ersavanfarhan
        </Copy>
        <h6 style={{ margin: "0px" }}>2022</h6>
      </Text>
    </Navbar>
  );
};

const Text = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  justify-items: center;
  color: white;
`;

const Copy = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
