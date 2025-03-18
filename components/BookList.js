import React from "react";
import "./BookList.css";

function BookList({ books, addToCart }) {
  return (
    <div className="book-list">
      <h2>Danh sách sách</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <strong>{book.title}</strong>
            <button className="add-button" onClick={() => addToCart(book)}>Thêm vào giỏ hàng</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
