import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { getMenuItemsByCategory } from "./MenuApi";

const categories = [
  "friedChicken",
  "ChFingerMenu",
  "ChBurgerMenu",
  "ChNuggetMenu",
  "SidesMenu",
  "GaryDeals",
];

const OrderMenu = () => {
  const [menuItems, setMenuItems] = useState({});

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
    <div className="orderitemboxcontainer" alt="menu items wrapper">
      {categories.map((category) => (
        <div key={category}>
          {menuItems[category]?.map((menuItem) => (
            <MenuItem key={menuItem.id} {...menuItem} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderMenu;
