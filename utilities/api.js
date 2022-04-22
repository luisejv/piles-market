import axios from "axios";

export const PilesAPI = axios.create({
  baseURL: "https://api.pilesapparel.com/api",
});
