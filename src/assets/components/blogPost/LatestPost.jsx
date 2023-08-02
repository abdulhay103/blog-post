import React from "react";
import { Link } from "react-router-dom";

const LatestPost = ({ posts }) => {
  return (
    <div className=" container mx-auto p-6 lg:p-0 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-6">
        {posts.map((post, index) => {
          return (
            <Link
              to={"/details/" + post["id"]}
              key={index.toString()}
              className="card bg-slate-50 shadow-xl"
            >
              <figure>
                <img src={post.img} alt={post.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.short}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LatestPost;
