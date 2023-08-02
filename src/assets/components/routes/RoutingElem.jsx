import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Error404 from "../../pages/Error404";
import Cateories from "../../pages/PostCateories";
import Details from "../../pages/PostDetails";

const RoutingElem = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/categories/:categoryID" element={<Cateories />} />
      <Route exact path="/details/:detailsID" element={<Details />} />
      <Route exact path="*" element={<Error404 />} />
    </Routes>
  );
};

export default RoutingElem;
