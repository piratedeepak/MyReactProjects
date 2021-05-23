import React, { useContext, useState } from "react";
import Axios from "axios";
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from "reactstrap";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";
import { Redirect } from "react-router-dom";
import { UserContext } from "../context/Usercontext";
import { toast } from "react-toastify";

const Home = () => {
  const context = useContext(UserContext);
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const fetchdetails = async () => {
    try {
      const response = await Axios.get(`https://api.github.com/users/${query}`);
      const data = response.data;
      setUser(data);
      // console.log(data);
    } catch (err) {
      toast("User not Found", { type: "error" });
    }
  };

  if (!context.user?.uid) {
    return <Redirect to="/signin" />;
  } else {
    return (
      <Container>
        <Row className="mt-3">
          <Col md="5">
            <InputGroup>
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Username"
              />
              <InputGroupAddon addonType="append">
                <Button color="primary" onClick={fetchdetails}>
                  Fetch User
                </Button>
              </InputGroupAddon>
            </InputGroup>
            {user ? <UserCard user={user} /> : null}
          </Col>
          <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
        </Row>
      </Container>
    );
  }
};

export default Home;
