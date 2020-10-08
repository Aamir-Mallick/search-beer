import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./mainStyle.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Form, Card, Button } from "react-bootstrap";

function Main(props) {
  // window.addEventListener("scroll", () => {
  //   // console.log(window.scrollY);

  //   if (
  //     window.scrollY + window.innerHeight >=
  //     document.documentElement.scrollHeight - 100
  //   ) {
  //     props.scrolling();
  //   }
  // });

  const toggleFavorite = (fav) => {
    props.addFavItems(fav);
  };

  return (
    <InfiniteScroll
      dataLength={props.data.length}
      next={() => {
        props.scrolling();
      }}
      hasMore={true}
    >
      <div className="mainPage-container">
        {props.data.map((items) => {
          return (
            <Card
              className="card-main-body"
              key={items.id}
              style={{ width: "16rem" }}
            >
              <Card.Img
                className="card-img"
                variant="top"
                src={items.image_url}
              />
              <Card.Body className="card-inner-body">
                <Card.Title className="card-title">{items.name}</Card.Title>
                <Card.Text className="card-text-body">
                  {items.description}
                </Card.Text>
                <Button
                  id="btn"
                  onClick={() => {
                    toggleFavorite(items);
                  }}
                ></Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </InfiniteScroll>
  );
}

export default Main;
