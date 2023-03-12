import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/slice/product";

const Cards = ({ item, index }) => {
  const dispatch = useDispatch()

  const addProduct = (product) => {
    dispatch(addToCart(product));
    toast.success("Добавлен в корзину");
  };
  
  return (
    <>
      <div key={index} className="card">
        <img src={item.image} alt="" />
        <div className="card_titles">
          <p className="price-item">${item.price}</p>
          <p className="title-item">{item.title}</p>
          <div className="card_btns">
            <Link className="card-link" to={`/product/${item.id}`}>
              <span>Подробнее</span>
            </Link>
            <span onClick={()=>addProduct(item)} className="card_add">
            <i class="fa-solid fa-bag-shopping"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
