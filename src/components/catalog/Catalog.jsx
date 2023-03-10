import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards from "./catalog-card";
import "./catalog.css";
import Loader from "./loader-catalog";
const Catalog = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(items);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setItems(res.data);
        setFilter(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterProduct = (cat) => {
    const updatedList = items.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <>
      <div className="catalog_section">
        <div className="container">
          <div className="catalog_container">
            <h1>Каталог</h1>
            <div className="catalog_filter">
              <h3>Категории:</h3>
              <button id="men_filter-text" onClick={() => setFilter(items)}>
                Все
              </button>
              <button
                id="men_filter-text"
                onClick={() => filterProduct("men's clothing")}>
                Мужчинам
              </button>
              <button
                id="women_filter-text"
                onClick={() => filterProduct("women's clothing")}>
                Женщинам
              </button>
            </div>
            
            {loading ? (
              <Loader />
            ) : (
              <div className="catalog-cards">
                {filter.map((item, index) => (
                  <Cards item={item} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
