import axios from "axios";

const KEY = "AIzaSyDpvw0WLybvsavX0oze9bkq8iUirPwq60U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
