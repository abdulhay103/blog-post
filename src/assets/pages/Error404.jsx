import React from "react";
import Layout from "../layout/Layout";

const Error404 = () => {
  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center">
        <p className=" text-xl font-black text-red-500 px-8 py-6 border-2 border-red-500 rounded">
          Page Not Found
        </p>
      </div>
    </Layout>
  );
};

export default Error404;
