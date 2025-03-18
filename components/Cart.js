import React from "react";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      <ul>
        {cart.map((book) => (
          <li key={book.id} className="cart-item">
            <strong>{book.title}</strong>
            <button className="remove-button" onClick={() => removeFromCart(book.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;