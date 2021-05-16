import axios from "axios";

const apiHost = process.env.REACT_APP_API_HOST || 'http://127.0.0.1:8080';
const origin = process.env.REACT_APP_ORIGIN || 'http://127.0.0.1:3000/';
const getHeaders = () => ({
  headers: {
    "Content-Type": "application/json",
    "Origin": origin
  }
})

export const getFullURL = (url) => {
  return apiHost + "/" + url;
}

const Request = {

  get: async (url) => {

    try {
      let result = await axios.get(
        getFullURL(url),
        getHeaders()
      );
      return Promise.resolve(result.data);
    } catch (error) {
      console.log(error);
      return Promise.reject("get error");
    }

  },

  create: async (url, body) => {

    try {
      let result = await axios.post(
        getFullURL(url), 
        body, 
        getHeaders()
      );
      if (result.status === 201) {
        return Promise.resolve(result.data);
      } else {
        return Promise.reject(result.data);
      }
    } catch (error) {
      console.log("create error", error);
      return Promise.reject("save error");
    }

  },

  update: async (url, body) => {

    try {
      let result = await axios.put(
        getFullURL(url), 
        body, 
        getHeaders()
      );
      if (result.status === 200) {
        return Promise.resolve(result.data);
      } else {
        return Promise.reject(result.data);
      }
    } catch (error) {
      console.log(error);
      return Promise.reject("Save Error");
    }

  },

  delete: async (url) => {

    try {
      let result = await axios.delete(
        getFullURL(url), getHeaders
      );
      if (result.status === 204) {
        return Promise.resolve("deleted");
      } else {
        return Promise.reject("failed");
      }
    } catch (error) {
      console.log(error);
      return Promise.reject("Delete Error");
    }

  }
}

export default Request;