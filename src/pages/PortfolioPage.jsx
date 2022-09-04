import React, { useState } from "react";

import portfolios from "../data/portfolios";
import Title from "../components/Title";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

const PortfolioPage = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolios"} span={"portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
};

export default PortfolioPage;
