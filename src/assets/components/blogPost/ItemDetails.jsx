import React from "react";

const ItemDetails = ({ post }) => {
  return (
    <div className="container mx-auto py-28">
      <div className="card card-compact w-full bg-gray-50 shadow-xl">
        <figure>
          <img src={post.postDetails.img} alt="Post Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sky-500">{post.postDetails.title}</h2>
          <p className="text-gray-400">{post.postDetails.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
