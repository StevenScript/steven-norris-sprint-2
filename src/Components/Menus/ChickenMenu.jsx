import React, { useEffect, useState } from "react";
import MenuItem from "../Common/MenuItem";
import { getMenuItemsByCategory } from "../Common/MenuApi";

const ChickenMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = () => {
      const data = getMenuItemsByCategory("friedChicken");
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="bigmenu-item">
      <img src="img/Menu/FriedChicken.png" alt="Fried Chicken" />
      <div className="menuitemboxcontainer" alt="menu items wrapper">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default ChickenMenu;
