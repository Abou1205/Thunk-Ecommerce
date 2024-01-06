import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const state = useSelector((store) => store.basket)

  const totalAmount = state.basket.reduce((total,item) => total + item.amount,0)


  return (
    <nav className="navbar bg-dark position-sticky top-0 z-3 shadow shadow-lg">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand text-white" href="#">
          <img
            src="vite.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Redux Thunk E-Commerce
        </Link>
        <div className="d-flex gap-3 align-items-center">
            <NavLink to={"/"} className="text-white">Home Page</NavLink>
            <NavLink to={"/basket"} className="text-white">
              <span>Basket</span>
              <span className="badge bg-danger mx-2">{totalAmount}</span>
            </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
