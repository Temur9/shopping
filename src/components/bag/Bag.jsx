import React from "react";
import { Link } from "react-router-dom";
import "./bag.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  delFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slice/product";
import BagCard from "./bag-cards";

const Bag = () => {
  const product = useSelector((state) => state.product.product);

  const dispatch = useDispatch();

  const delProduct = (product) => {
    dispatch(delFromCart(product));
    toast.info("Удален из корзины");
  };

  const decrementProduct = (product) => {
    dispatch(decrementQuantity(product));
  };
  const incrementProduct = (product) => {
    dispatch(incrementQuantity(product));
  };

  const getTotal = () => {
    let totalPrice = 0;
    product.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice };
  };

  const bagCardProps = { incrementProduct, decrementProduct, delProduct };

  return (
    <>
      <section className="bag_section">
        <div className="container">
          <div className="bag_container">
            <div className="bag_container-products">
              <Link className="button_arrow-back" to="/product">
                <img id="img_arrow_back" src="/images/arrow_back.svg" alt="" />
              </Link>
              <h1 id="bag_h1">Корзина</h1>
              <div className="bag_card-wrapper">
              {product.map((state) => (
                <BagCard state={state} {...bagCardProps} />
              ))}
              </div>
            </div>
            <div className="bag_container-allprice">
              <p className="all_price">
                Итого: <span>${getTotal().totalPrice.toFixed(2)}</span>
              </p>
              <button className="buy_button">Заказать</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bag;
