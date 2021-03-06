import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import BuyPage from "./Components/BuyPage";
import Cart from "./Components/Cart";
import { Container, Row, Col } from "reactstrap";

function App() {
  const [cartitem, setCartitem] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartitem.findIndex((array) => array.id === item.id);
    if (isAlreadyAdded !== -1) {
      toast("Already added in cart", {
        type: "error",
      });
    } else {
      setCartitem([...cartitem, item]);
    }
  };

  const buyNow = () => {
    setCartitem([]);
    toast("Purchase Complete", {
      type: "success",
    });
  };

  const removeItem = (item) => {
    setCartitem(cartitem.filter((singleItem) => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartitem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
