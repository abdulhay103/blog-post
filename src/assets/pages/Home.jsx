import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Loader from "../utilities/Loader";
import { newestPost } from "../apiReruest/ApiRequest.js";
import LatestPost from "../components/blogPost/LatestPost";

const Home = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await newestPost();
      setLatestPosts(data);
    })();
  }, []);
  return (
    <Layout>
      {latestPosts.length > 0 ? <LatestPost posts={latestPosts} /> : <Loader />}
    </Layout>
  );
};

export default Home;
