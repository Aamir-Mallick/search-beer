import React, { useState, useEffect } from "react";

function Favorite(props) {
  const [favList, setFavList] = useState([]);

  useState(() => {
    setFavList(props.favItems);
  }, [props.favItems]);

  return (
    <div>
      {console.log(props.favItems)}
      {favList.map((items) => {
        return <p key={items.id}>{items.name}</p>;
      })}
    </div>
  );
}

export default Favorite;
