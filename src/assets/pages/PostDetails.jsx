import React, { useEffect, useState } from "react";
import { newestPost, postDetails } from "../apiReruest/ApiRequest.js";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout.jsx";
import Loader from "../utilities/Loader.jsx";
import ItemDetails from "../components/blogPost/ItemDetails.jsx";

const PostDetails = () => {
  let { detailsID } = useParams();
  let [singlePost, setSinglePost] = useState(null);

  useEffect(() => {
    (async () => {
      let detailPost = await postDetails(detailsID);
      setSinglePost(detailPost);
    })();
  }, [detailsID]);
  return (
    <Layout>
      {singlePost === null ? <Loader /> : <ItemDetails post={singlePost} />}
    </Layout>
  );
};

export default PostDetails;
