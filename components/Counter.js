import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Bộ đếm</h2>
      <p>Số lần nhấn: {count}</p>
      <button className="counter-button" onClick={() => setCount(count + 1)}>Tăng</button>
      <button className="counter-button" onClick={() => setCount(count - 1)}>Giảm</button>
    </div>
  );
}

export default Counter;
