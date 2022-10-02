import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./catalog.css";
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
  const Loading = () => {
    return (
      <>
        <div className="loading_container">
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
            </div>
          </div>
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
            </div>
          </div>
          <div className="movie--isloading">
            <div className="loading-image"></div>
            <div className="loading-content">
              <div className="loading-text-container">
                <div className="loading-main-text"></div>
                <div className="loading-sub-text"></div>
              </div>
              <div className="loading-btn"></div>
            </div>
          </div>
        </div>
      </>
    );
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
              <Loading />
            ) : (
              <div className="catalog-cards">
                {filter.map((item, index) => (
                  <div key={index} className="card">
                    <img src={item.image} alt="" />
                    <div className="card_titles">
                      <p className="price-item">${item.price}</p>
                      <p className="title-item">{item.title}</p>
                      <Link className="card-link" to={`/product/${item.id}`}>
                        <span>Подробнее</span>
                      </Link>
                    </div>
                  </div>
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
