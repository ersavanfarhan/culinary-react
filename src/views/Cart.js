import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import swal from "sweetalert";
import ModalCart from "../components/ModalCart";
import { numberWithCommas } from "../utils/utils";
import { URL_Image } from "../utils/utils";

export default function Cart() {
  const [carts, setCart] = useState([]);
  const [total, setTotal] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3004/carts")
      .then((res) => {
        setCart(res.data);
        setTotal(carts.reduce((a, v) => (a = a + v.harga), 0));
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // DELETE with Axios
  const deletePost = (id) => {
    var empty = document.getElementById("empty");
    var myCart = document.getElementById("myCart");
    axios.delete("http://localhost:3004/carts/" + id);
    if (carts.length !== 0) {
      empty.style.display = "none";
      myCart.style.display = "block";
      window.location.reload();
    }
  };

  useEffect(() => {
    var empty = document.getElementById("empty");
    var myCart = document.getElementById("myCart");
    if (carts.length !== 0) {
      empty.style.display = "none";
      myCart.style.display = "block";
    }
  });

  const closeModal = () => setShow(false);

  const showModal = (id) => {
    setShow(true);
    // console.log(id);
  };

  return (
    <Container className="mt-3 mb-3" style={{ minHeight: "70vh" }}>
      <h1 id="myCart" style={{ display: "none" }}>
        <strong>My Cart</strong>
      </h1>

      <Empty>
        <h3 id="empty" style={{ display: "block" }}>
          Your cart is empty
        </h3>
      </Empty>

      {carts &&
        carts.map((carts, index) => (
          <Items key={index}>
            <Image src={URL_Image + carts.gambar} alt="gambar" />
            <Content>
              <div className="p-2">
                <h5 className="food-name">{carts.nama} </h5>
                <h6>Rp {numberWithCommas(carts.harga)}</h6>
                <h6>
                  {carts.quantity} pc(s) - {carts.note}
                </h6>
              </div>

              <ButtonCart type="button">
                <Edit type="button" onClick={() => showModal(carts.id)}>
                  <Icon className="material-symbols-outlined">edit</Icon>
                </Edit>

                <Delete type="button" onClick={() => deletePost(carts.id)}>
                  <Icon className="material-symbols-outlined">delete</Icon>
                </Delete>
              </ButtonCart>
            </Content>
          </Items>
        ))}

      <ModalCart closeModal={closeModal} show={show} carts={carts} />

      <div>
        <h4>Total :</h4>
        <Total>
          <h3>
            <strong>Rp {numberWithCommas(total)}</strong>
          </h3>
          <button
            className="btn btn-success"
            onClick={() => {
              swal({
                title: "Warning",
                text: "Pay your order for Rp " + numberWithCommas(total) + "?",
                icon: "warning",
                buttons: {
                  cancel: true,
                  confirm: "Confirm",
                },
              }).then((Confirm) => {
                if (Confirm) {
                  swal({
                    title: "Success",
                    text: "Paid successfully!",
                    icon: "success",
                    buttons: "OK",
                  });
                }
              });
            }}
          >
            PAY NOW
          </button>
        </Total>
      </div>
    </Container>
  );
}

const Empty = styled.div`
  text-align: center;
`;

const Items = styled.div`
  width: 100%;
  margin-bottom: 2vh;
  display: flex;
  gap: 1vw;
  border: 2px solid black;
  border-radius: 1rem;
`;

const Image = styled.img`
  width: 10vw;
  aspect-ratio: 5/3;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;

  @media screen and (max-width: 576px) {
    width: 30vw;
  }
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ButtonCart = styled.div`
  display: flex;
`;

const Edit = styled.div`
  background-color: orange;
  color: white;
  position: relative;

  @media screen and (max-width: 576px) {
    padding: 5vw;
  }

  @media screen and (min-width: 576px) {
    padding: 2vw;
  }
`;

const Delete = styled.div`
  background-color: red;
  color: white;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  position: relative;

  @media screen and (max-width: 576px) {
    padding: 5vw;
  }

  @media screen and (min-width: 576px) {
    padding: 2vw;
  }
`;

const Icon = styled.span`
  position: absolute;
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
