import React from "react";
import MenuBar from "../components/menubar/MenuBar";
import Footer from "../components/footer/Footer";

const Layout = (props) => {
  return (
    <div>
      <MenuBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
