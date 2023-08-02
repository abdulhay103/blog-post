import React from "react";
import { BrowserRouter } from "react-router-dom";
import RoutingElem from "./assets/components/routes/RoutingElem";

const App = () => {
  return (
    <div className=" bg-gradient-to-tl from-teal-100 via-slate-100 to-purple-200 min-h-screen">
      <BrowserRouter>
        <RoutingElem />
      </BrowserRouter>
    </div>
  );
};

export default App;
