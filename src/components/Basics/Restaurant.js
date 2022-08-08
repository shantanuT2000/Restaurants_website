import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


// ... is a spread operator used to show pure data from array
//map function for running loop or showing every object
const uniquelist = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

// console.log(uniquelist);
const Restaurant = () => {
  //state management data storing or getting from api database
  const [MenuData, setMenuData] = useState(Menu);
  const [NavList, setNavList] = useState(uniquelist);
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <h1>Welcome to Our Food Court</h1>
      {/* snding fn of parent to children as prop cis callback fn in react */}
      <Navbar filterItem={filterItem} NavList={NavList} />
      {/* sending props/data to another components */}
      <MenuCard menuData={MenuData} />
    </>
  );
};

export default Restaurant;
