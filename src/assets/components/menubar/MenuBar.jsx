import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { postCategories } from "../../apiReruest/ApiRequest.js";
import avaterImg from "../../images/avater.png";

const MenuBar = () => {
  let [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      let res = await postCategories();
      setCategories(res);
    })();
  }, []);
  return (
    <header className=" w-full bg-white fixed z-50 shadow">
      <div className=" container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <Link tabIndex={0} className=" btn btn-link text-sky-500 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Link>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52"
            >
              {categories.map((item, i) => {
                return (
                  <li key={i.toString()}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? " text-amber-500 font-bold text-lg font-mono"
                          : " text-sky-600 font-bold text-lg font-mono"
                      }
                      to={"/categories/" + item["id"]}
                    >
                      {item["name"]}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link
            to="/"
            className=" font-black text-xl text-sky-500 hover:text-amber-600"
          >
            RI Blog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {categories.map((item, i) => {
              return (
                <li key={i.toString()}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? " text-amber-500 font-bold text-lg font-mono"
                        : " text-sky-600 font-bold text-lg font-mono"
                    }
                    to={"/categories/" + item["id"]}
                  >
                    {item["name"]}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avaterImg} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
