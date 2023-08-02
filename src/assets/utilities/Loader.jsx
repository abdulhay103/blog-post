import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div>
        <span className="loading loading-ring loading-xs bg-sky-500"></span>
        <span className="loading loading-ring loading-sm bg-amber-500"></span>
        <span className="loading loading-ring loading-md bg-sky-500"></span>
        <span className="loading loading-ring loading-lg bg-amber-500"></span>
      </div>
    </div>
  );
};

export default Loader;
