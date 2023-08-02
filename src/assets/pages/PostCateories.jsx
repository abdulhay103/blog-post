import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postList } from "../apiReruest/ApiRequest.js";
import Layout from "../layout/Layout.jsx";
import CardPost from "../components/blogPost/CardPost.jsx";
import Loader from "../utilities/Loader.jsx";

const PostCateories = () => {
  let { categoryID } = useParams();
  let [list, setList] = useState(null);

  useEffect(() => {
    (async () => {
      let res = await postList(categoryID);
      setList(res);
    })();
  }, [categoryID]);
  return (
    <Layout>{list === null ? <Loader /> : <CardPost list={list} />}</Layout>
  );
};

export default PostCateories;
