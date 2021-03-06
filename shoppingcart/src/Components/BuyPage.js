import axios from "axios";
import { commerce, random } from "faker";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { API_KEY } from "../Pexel"; //api key file isnot available on github for security reason
import CardItem from "./CartItem";
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=4";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const { photos } = data;
    // console.log(photos);
    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: commerce.productName(),
      productPrice: commerce.price(),
      id: random.uuid(),
    }));

    setProduct(allProduct);
  };
  useEffect(() => {
    fetchPhotos();
  }, []);
  return (
    <Container fluid>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} key={product.id}>
            <CardItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
