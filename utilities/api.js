import axios from "axios";

const PilesAPI = axios.create({
  baseURL: "https://api.pilesapparel.com/api",
});

export default PilesAPI;
