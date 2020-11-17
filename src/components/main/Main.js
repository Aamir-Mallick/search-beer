import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./mainStyle.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";

function Main(props) {
  const toggleFavorite = (fav, e) => {
    props.addFavItems(fav);
  };

  return (
    <>
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

                  <Button id="btn" onClick={(e) => toggleFavorite(items, e)}>
                    {props.favItems.includes(items) ? (
                      <FontAwesomeIcon icon={faStar} color="red" />
                    ) : (
                      <FontAwesomeIcon icon={faStar} />
                    )}
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </InfiniteScroll>
    </>
  );
}

export default Main;
