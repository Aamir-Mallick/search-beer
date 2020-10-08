import React, { useState, useEffect } from "react";
import Main from "./components/main/Main";
import MyNavbar from "./components/nav/MyNavbar";
import Favorite from "./components/favorite/Favorite";
import axios from "axios";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [favItems, setFavItems] = useState([]);

  const addFavItems = (addFav) => {
    if (!favItems.some((items) => items.id === addFav.id)) {
      setFavItems((pre) => [...pre, addFav]);
    } else {
      let newfav = favItems.filter((x) => {
        return x.id !== addFav.id;
      });
      setFavItems(newfav);
    }
  };

  useEffect(() => {
    getData();
    console.log("effect " + page);
  }, [page]);

  const setScrolling = () => {
    setPage(page + 1);
  };

  const getData = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers?page=${page}&per_page=12`)
      .then((getData) => {
        let fetchedData = getData.data;
        console.log(fetchedData);
        setData((pre) => [...pre, ...fetchedData]);
      });
  };

  const searchData = (value) => {
    axios
      .get(`https://api.punkapi.com/v2/beers?beer_name=${value}`)
      .then((data) => {
        let searchedData = data.data;
        setData(searchedData);
      });
  };

  return (
    <BrowserRouter>
      <MyNavbar searchData={searchData} homeData={getData} />
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Main
              data={data}
              scrolling={setScrolling}
              addFavItems={addFavItems}
            />
          )}
        />
        <Route
          path="/favorite"
          component={() => <Favorite favItems={favItems} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
