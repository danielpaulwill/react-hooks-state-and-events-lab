import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  const cartClass = inCart ? "in-cart" : ""
  const cartText = inCart ? "Remove From Cart" : "Add to Cart"

  function handleClick() {
    setInCart((inCart) => !inCart)
  }
  
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{cartText}</button>
    </li>
  );
}

export default Item;
