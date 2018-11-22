import axios from "axios";

function getVideos() {
  return axios.get("https://www.mocky.io/v2/5bf6b3bb32000064005d10bd");
}

export { getVideos };
