import React from "react";

const BagCard = (props) => {
  const { incrementProduct, decrementProduct, delProduct, state } = props;

  return (
    <>
      <div key={state.id} className="bag_card">
        <div className="bag_card-image">
          <img src={state.image} alt={state.title} />
        </div>
        <div className="bag_item-counter">
          <p className="bag-item-title">{state.title}</p>
          <div className="counter-buttons">
            <button onClick={() => decrementProduct(state)}>-</button>
            <p>{state.quantity}</p>
            <button onClick={() => incrementProduct(state)}>+</button>
          </div>
          <button onClick={() => delProduct(state)} className="delete-button">
            <img src="/images/trash.svg" alt="" />
            Удалить
          </button>
        </div>
        <div className="bag_item-price">
          <p className="bag_item-price_text">Стоимость</p>
          <h3 className="price-field">
            ${(state.price * state.quantity).toFixed(2)}
          </h3>
        </div>
      </div>
    </>
  );
};

export default BagCard;
