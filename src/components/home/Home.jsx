import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const Home = () => {
  return (
    <>
      <section className="home_section">
        <div className="container">
          <div className="home_container">
            <div className="left_container">
              <img
                className="left_container-image"
                src="../images/shirt.png"
                alt=""
              />
              <p className="welcome-text">
                Добро пожаловать в<span className="coctail-word">Cocteil</span>
              </p>
              <p className="tagline">
                Экономим Ваше время! Предлагаем лучшие цены! Доставляем в
                кратчайшие сроки!
              </p>
            </div>
            <div className="right_container">
              <img
                className="right_container-image"
                src="../images/jeans.png"
                alt=""
              />
            </div>
          </div>
          <Link className="home_catalog-button" to='/product'><span>Каталог</span></Link>
        </div>
      </section>
    </>
  );
};

export default Home;
