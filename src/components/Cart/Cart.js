import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let command;
  if (cart.length === 0) {
    command = <p>Please add at least one</p>;
  } else if (cart.length === 1) {
    command = <p>Please add one more item ....</p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding Items</small>
      </p>
    );
  }
  return (
    <div>
      <h2>Item selected:{cart.length}</h2>

      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {cart.length === 0 || <p className="orange">Losser</p>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>trigonal</h3>
          <p>Gift for three</p>
        </div>
      )}
      {command}
      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove All</button>}
    </div>
  );
};

export default Cart;
