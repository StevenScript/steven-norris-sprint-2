import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { getMenuItemsByCategory } from "./MenuApi";

const GaryDeals = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = () => {
      const data = getMenuItemsByCategory("GaryDeals");
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="bigmenu-item">
      <img src="img/Menu/GaryDeals.png" alt="Chicken Nuggets" />
      <div className="menuitemboxcontainer" alt="menu items wrapper">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default GaryDeals;
