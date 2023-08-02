import React from "react";
import { Link } from "react-router-dom";

const CardPost = ({ list }) => {
  return (
    <div className=" container mx-auto p-6 lg:p-0 md:p-0">
      <div className=" pt-14 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-2 gap-6">
          {list.map((item, index) => {
            return (
              <Link
                to={"/details/" + item["id"]}
                key={index.toString()}
                className="card bg-slate-50 shadow-xl"
              >
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.short}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardPost;
