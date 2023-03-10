import React from "react";
import { Link } from "react-router-dom";

const Cards = ({item,index}) => {
  return (
    <>
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
    </>
  );
};

export default Cards;
