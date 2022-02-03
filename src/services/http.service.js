import axios from "axios";
const KEY = 'AIzaSyDd_sfvQ4NASb-k0oKYAr_g9FZcQILtyKc' 

// Axios is a library that serves to create HTTP requests that are present externally.

export const http = axios.create({
    baseUrl: "http://" ,
    params: {
      part: 'snippet' ,
      maxResults: 5,
      key: KEY
    }
})