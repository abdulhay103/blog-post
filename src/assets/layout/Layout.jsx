import React from "react";
import MenuBar from "../components/menubar/MenuBar";
import Footer from "../components/footer/Footer";

const Layout = (props) => {
  return (
    <div className=" w-full h-full">
      <MenuBar />
      <div className=" py-24">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
