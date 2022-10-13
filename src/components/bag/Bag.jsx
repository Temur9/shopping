import React from "react";
import { Link } from "react-router-dom";
import "./bag.css";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addCart, delCart } from "../../redux/action";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Bag = () => {
  const states = useSelector((state) => state.handleCart);
  const [local, setLocal] = useState(states);

  const dispatch = useDispatch();
  const delProduct = (product) => {
    dispatch(delCart(product));
    toast.warning('Удален из корзины')
  };
  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success('Добавлен в корзину')
  };
  
  useEffect(() => {
    localStorage.setItem("states", JSON.stringify(local));
  }, [local]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("states"));

    if (local) {
      setLocal(local);
    }
  }, []);

  return (
    <>
      <section className="bag_section">
        <div className="container">
          <div className="bag_container">
            <Link className="button_arrow-back" to="/product">
              <img id="img_arrow_back" src="/images/arrow_back.svg" alt="" />
            </Link>
            <h1 id="bag_h1">Корзина</h1>
            {states.map((state) => (
              <div key={state.id} className="bag_card">
                <div className="bag_card-image">
                  <img src={state.image} alt={state.title} />
                </div>
                <div className="bag_item-counter">
                  <p className="bag-item-title">{state.title}</p>
                  <div className="counter-buttons">
                    <button onClick={() => delProduct(state)}>-</button>
                    <p>{state.qty}</p>
                    <button onClick={() => addProduct(state)}>+</button>
                  </div>
                  <button
                    onClick={() => delProduct(state)}
                    className="delete-button">
                    <img src="/images/trash.svg" alt="" />
                    Удалить
                  </button>
                </div>
                <div className="bag_item-price">
                  <p className="bag_item-price_text">Стоимость</p>
                  <h3 className="price-field">${state.price * state.qty}</h3>
                </div>
              </div>
            ))}

            <p className="all_price">
              Итого: <span>0</span>
            </p>
            <button className="buy_button">Заказать</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bag;
