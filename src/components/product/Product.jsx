import React, { useEffect, useState } from "react";
import "./product.css";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { addCart } from "../../redux/action";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    getItems();
  }, []);

  const getItems = () => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Loading = () => {
    return (
      <>
        <div className="loading_container">
          <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="product_section">
        <div className="container">
          <div className="product_container">
            <Link className="button_arrow-back" to="/product">
              <img id="img_arrow_back" src="/images/arrow_back.svg" alt="" />
            </Link>
            {loading ? (
              <Loading />
            ) : (
              <div className="product">
                <div className="product_image">
                  <h2 className="product_title">{product.title}</h2>
                  <img id="product_image" src={product.image} alt="" />
                </div>
                <div className="product_info">
                  <h1 className="product_price">${product.price}</h1>
                  <h3 className="product_descrip">Описание</h3>
                  <h3 className="product_description">{product.description}</h3>
                  <button
                    className="bag_button"
                    onClick={(() => addProduct(product))}
                    >
                    В корзину <img src="./images/shopping-bag.svg" alt="" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
