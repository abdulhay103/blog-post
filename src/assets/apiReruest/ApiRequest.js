import axios from "axios";
const baseURL = "https://basic-blog.teamrabbil.com/api";

// fetch Post Categories
export async function postCategories() {
  let res = await axios.get(baseURL + "/post-categories");
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
}

//Fetch Newest post
export async function newestPost() {
  let res = await axios.get(baseURL + "/post-newest");
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
}

// Fetch Post list
export async function postList(id) {
  let res = await axios.get(baseURL + "/post-list/" + id);
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
}

// fetch deetails Post
export async function postDetails(id) {
  let res = await axios.get(baseURL + "/post-details/" + id);
  if (res.status == 200) {
    return res.data;
  } else {
    return [];
  }
}
