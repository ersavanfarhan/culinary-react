import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import swal from "sweetalert";
import { URL_Image } from "../utils/utils";

// Food Details //
export function FoodDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/foods/" + id)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Add Cart Function //
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const addCart = async (e) => {
    e.preventDefault();
    if (quantity) {
      const order = {
        nama: detail.nama,
        quantity: quantity,
        note: note,
        gambar: detail.gambar,
        harga: detail.harga * quantity,
      };
      try {
        await axios.post("http://localhost:3004/carts", order);
        swal({
          title: "Success",
          text: "Your product has been added",
          icon: "success",
          button: "OK",
        });
      } catch (e) {}
    } else {
      swal({
        title: "Info",
        text: "Please fill the quantity",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <Container className="mt-3">
      <h1>
        <strong>Food Detail</strong>
      </h1>
      <Content>
        <Image src={URL_Image + detail.gambar} alt="detail" />
        <Info>
          <h2>{detail.nama}</h2>
          <h5>Rp {detail.harga} </h5>
          <p>
            <i>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quae
              eligendi blanditiis perspiciatis optio repellat iusto nobis magnam
              expedita? Eveniet fuga recusandae et ea voluptates eaque unde cum
              qui ipsam
            </i>
          </p>
          <div className="mb-2">
            <h6>Quantity:</h6>
            <Number
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <h6>Notes:</h6>
            <Textarea
              placeholder="example: low level spicy"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></Textarea>
          </div>
          <button className="btn btn-success" onClick={addCart}>
            Add To Cart
          </button>
        </Info>
      </Content>
    </Container>
  );
}

// Beverage Details //
export function BeverageDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/beverages/" + id)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Add Cart Function //
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const addCart = async (e) => {
    e.preventDefault();
    if (quantity) {
      const order = {
        nama: detail.nama,
        quantity: quantity,
        note: note,
        gambar: detail.gambar,
        harga: detail.harga * quantity,
      };
      try {
        await axios.post("http://localhost:3004/carts", order);
        swal({
          title: "Success",
          text: "Your product has been added",
          icon: "success",
          button: "OK",
        });
      } catch (e) {}
    } else {
      swal({
        title: "Info",
        text: "Please fill the quantity",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <Container className="mt-3">
      <h1>
        <strong>Beverage Detail</strong>
      </h1>
      <Content>
        <Image src={URL_Image + detail.gambar} alt="detail" />
        <Info>
          <h2>{detail.nama}</h2>
          <h5>Rp {detail.harga} </h5>
          <p>
            <i>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quae
              eligendi blanditiis perspiciatis optio repellat iusto nobis magnam
              expedita? Eveniet fuga recusandae et ea voluptates eaque unde cum
              qui ipsam
            </i>
          </p>
          <div className="mb-2">
            <h6>Quantity:</h6>
            <Number
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <h6>Notes:</h6>
            <Textarea
              placeholder="Notes here"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></Textarea>
          </div>
          <button className="btn btn-success" onClick={addCart}>
            Add To Cart
          </button>
        </Info>
      </Content>
    </Container>
  );
}

// Snack Details //
export function SnackDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/snacks/" + id)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  // Add Cart Function //
  const [quantity, setQuantity] = useState("");
  const [note, setNote] = useState("");
  const addCart = async (e) => {
    e.preventDefault();
    if (quantity) {
      const order = {
        nama: detail.nama,
        quantity: quantity,
        note: note,
        gambar: detail.gambar,
        harga: detail.harga * quantity,
      };
      try {
        await axios.post("http://localhost:3004/carts", order);
        swal({
          title: "Success",
          text: "Your product has been added",
          icon: "success",
          button: "OK",
        });
      } catch (e) {}
    } else {
      swal({
        title: "Info",
        text: "Please fill the quantity",
        icon: "error",
        button: "OK",
      });
    }
  };

  return (
    <Container className="mt-3">
      <h1>
        <strong>Snack Detail</strong>
      </h1>
      <Content>
        <Image src={URL_Image + detail.gambar} alt="detail" />
        <Info>
          <h2>{detail.nama}</h2>
          <h5>Rp {detail.harga} </h5>
          <p>
            <i>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quae
              eligendi blanditiis perspiciatis optio repellat iusto nobis magnam
              expedita? Eveniet fuga recusandae et ea voluptates eaque unde cum
              qui ipsam
            </i>
          </p>
          <div className="mb-2">
            <h6>Quantity:</h6>
            <Number
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <h6>Notes:</h6>
            <Textarea
              placeholder="Notes here"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></Textarea>
          </div>
          <button className="btn btn-success" onClick={addCart}>
            Add To Cart
          </button>
        </Info>
      </Content>
    </Container>
  );
}

const Image = styled.img`
  width: 50vw;
  aspect-ratio: 5/3;
  border-radius: 1rem;

  @media screen and (max-width: 576px) {
    width: 100%;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const Content = styled.div`
  width: 100%;
  padding-top: 1vw;
  gap: 2vw;

  @media screen and (max-width: 576px) {
    display: grid;
    padding-bottom: 5vh;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: grid;
    padding-bottom: 5vh;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    padding-bottom: 10vh;
  }
`;

const Info = styled.div`
  width: 100%;
  text-align: justify;
  display: grid;
`;

const Number = styled.input`
  @media screen and (max-width: 576px) {
    width: 15vw;
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 10vw;
  }

  @media screen and (min-width: 768px) {
    width: 5vw;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
`;
