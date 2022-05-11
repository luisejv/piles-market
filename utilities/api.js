import axios from "axios";

const PilesAPI = axios.create({
  // baseURL: "https://api.pilesapparel.com/api",
  baseURL: "http://localhost:3003/api",
});

export default PilesAPI;
