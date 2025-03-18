import React, { useState } from "react";
import Cart from "./components/Cart";
import Counter from "./components/Counter";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  
  const books = [
    { id: 1, title: "Book A" },
    { id: 2, title: "Book B" },
    { id: 3, title: "Book C" },
  ];

  const addToCart = (book) => {
    setCart([...cart, book]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(book => book.id !== id));
  };

  return (
    <div className="container">
      <Counter />
      <BookList books={books} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;