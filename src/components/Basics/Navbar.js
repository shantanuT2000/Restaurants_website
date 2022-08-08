import React from "react";
import Restaurant from "./Restaurant";
const Navbar = ({ filterItem, NavList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {NavList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}
              >
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
