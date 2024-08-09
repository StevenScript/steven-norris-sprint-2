import React, { useEffect, useState } from "react";
import MenuItem from "../Common/MenuItem";
import { getMenuItemsByCategory } from "../Common/MenuApi";

const SidesMenu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = () => {
      const data = getMenuItemsByCategory("SidesMenu");
      setMenuItems(data);
    };

    fetchMenuItems();
  }, []);

  return (
    <div className="bigmenu-item">
      <img src="img/Menu/Sides.png" alt="Sides" />
      <div className="menuitemboxcontainer" alt="menu items wrapper">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem.id} {...menuItem} />
        ))}
      </div>
    </div>
  );
};

export default SidesMenu;
