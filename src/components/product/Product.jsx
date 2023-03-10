import React, { useEffect, useState } from "react";
import "./product.css";
import { useDispatch } from "react-redux/es/exports";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/slice/product";
import Loading from "./loader";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addToCart(product));
    toast.success("Добавлен в корзину");
  };

  const getItems = () => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

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
                    onClick={() => addProduct(product)}>
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
