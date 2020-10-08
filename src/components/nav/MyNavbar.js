import React, { useState, useEffect } from "react";
import "./myNavbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import {
  Container,
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";

function MyNavbar(props) {
  const [input, setInput] = useState("");

  const searchHandler = () => {
    props.searchData(input);
    setInput("");
  };

  const homeHandler = () => {
    props.homeData();
  };

  return (
    <Navbar bg="primary" variant="dark" className="navbar-main-container">
      <Navbar.Brand onClick={homeHandler} className="title">
        GetTheBeer
      </Navbar.Brand>

      <Form inline>
        <FormControl
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search"
          className="mr-sm-2"
          value={input}
        />
        <Button variant="outline-light" onClick={searchHandler}>
          Search
        </Button>
        <Link to="/">
          <Button variant="outline-light">Home</Button>
        </Link>
        <Link to="/favorite">
          <Button variant="outline-light">Favorite</Button>
        </Link>
      </Form>
    </Navbar>
  );
}

export default MyNavbar;
