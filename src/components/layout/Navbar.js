import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
// const menuImg = require("../../assets/icons.png");
function Navbar() {
  return (
    <>
      <div className={classes.navbar}>
        <Link to="#" className={classes.menuBar}>
          <ul className={classes.list}>
            <li id="homeImg" className={classes.homeImg}></li>
          </ul>
        </Link>
      </div>
    </>
  );
}
export default Navbar;
