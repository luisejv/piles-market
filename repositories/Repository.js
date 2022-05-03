import axios from "axios";
const baseDomain = "http://localhost:3003/api/";
// const baseDomain = 'https://supro.noudeveloper.com';
export const wp = "https://wp.nouhtml5.com";
export const baseUrlProduct = "https://api.pilesapparel.com/api";
// export const baseUrlProduct = "http://localhost:3003/api";
// export const baseUrlProduct = "https://supro.noudeveloper.com";

export const customHeaders = {
  Accept: "application/json",
};

export const baseUrl = `${baseUrlProduct}`;

export default axios.create({
  baseUrl,
  headers: customHeaders,
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
