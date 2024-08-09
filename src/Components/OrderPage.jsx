import React, { useState, useEffect } from "react";
import OrderMenu from "./OrderMenu";
import Cart from "./Cart";
import { getMenuItemsByCategory } from "./MenuApi";
import { useCart } from "./CartContext";

const categories = [
  "friedChicken",
  "chickenFingers",
  "chickenBurgers",
  "chickenNuggets",
  "sides",
  "garyDeals",
];

function OrderPage() {
  const [menuItems, setMenuItems] = useState({});
  const { cartItems, addToCart, getTotal } = useCart();

  useEffect(() => {
    const fetchMenuItems = async () => {
      const dataPromises = categories.map((category) =>
        getMenuItemsByCategory(category)
      );
      const dataResults = await Promise.all(dataPromises);

      const menuItemsData = dataResults.reduce((acc, data, index) => {
        acc[categories[index]] = data;
        return acc;
      }, {});

      setMenuItems(menuItemsData);
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="orderfullbody">
      <div className="OrderLeft">
        <OrderMenu menuItems={menuItems} addToCart={addToCart} />
      </div>
      <div className="OrderRight">
        <Cart cart={cartItems} calculateTotal={getTotal} />
      </div>
    </div>
  );
}

export default OrderPage;
