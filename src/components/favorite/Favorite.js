import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./favoriteStyle.css";

function Favorite(props) {
  const [favList, setFavList] = useState([]);

  useState(() => {
    setFavList(props.favItems);
  }, [props.favItems]);

  const deleteHandler = (id) => {
    let newArr = favList.filter((x) => {
      return x.id !== id;
    });
    setFavList(newArr);
  };

  return (
    <div className="favorite-main-Container">
      Favorite list
      {favList.map((items) => {
        return (
          <Card
            key={items.id}
            className="favorite-main-body"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={items.image_url} className="fav-img" />
            <Card.Body className="favorite-inner-body">
              <Card.Title className="favorite-title">{items.name}</Card.Title>
              <Card.Text className="favorite-text-body">
                {items.description}
              </Card.Text>
              <Button
                id="fev-btn"
                variant="primary"
                onClick={() => {
                  deleteHandler(items.id);
                }}
              >
                delete
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Favorite;
