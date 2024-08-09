import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { getMenuItemsByCategory } from "./MenuApi";

const ChBurgerMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = () => {
      const data = getMenuItemsByCategory("ChBurgerMenu");
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="bigmenu-item">
      <img src="img/Menu/ChickenBurgers.png" alt="fried chicken" />
      <div className="menuitemboxcontainer" alt="menu items wrapper">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default ChBurgerMenu;
