import axios from "axios";
// 前端跨域携带cookic
axios.defaults.withCredentials = true;
let base = "http://localhost:8082";
export default {
  postRequest,
  uploadFileRequest,
  putRequest,
  deleteRequest,
  getRequest,
};
function postRequest(url, params) {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function (data) {
        // Do whatever you want to transform the data
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      },
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
function uploadFileRequest(url, params) {
  return axios({
    method: "post",
    url: `${base}${url}`,
    data: params,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
function putRequest(url, params) {
  return axios({
    method: "put",
    url: `${base}${url}`,
    data: params,
    transformRequest: [
      function (data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      },
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}
function deleteRequest(url) {
  return axios({
    method: "delete",
    url: `${base}${url}`,
  });
}
function getRequest(url, params) {
  return axios({
    method: "get",
    params: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    url: `${base}${url}`,
  });
}
