import React, { useState } from "react";
import { useCart } from "./CartContext"; // Adjust the path as needed

const MenuItem = ({ id, imgSrc, altText, items, price, title }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const item = { id, imgSrc, altText, items, price: Number(price), title };
    addToCart(item);
    setAdded(true);

    // Remove the "added" class after 2 seconds
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="menuitembox">
      <div className="menuitem">
        <img src={imgSrc} alt={altText} />
      </div>
      <div className="menutextwrapper">
        <div className="menutext">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <br />
        </div>
        <div className="menuprice">${Number(price).toFixed(2)}</div>
      </div>
      <div className="menutextwrapper2">
        <div className="menutitle">{title}</div>
        <div
          className={`addbutton ${added ? "added" : ""}`}
          onClick={handleAddToCart}
        >
          <div className={`addbuttontext ${added ? "added" : ""}`}>
            {added ? "Added!" : "ADD TO ORDER"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
