import React from "react";
import ReactDOM from "react-dom";

// import styles from "./index.module.css";
import App from "./App";
import axios from "axios";

// So here we catch errors globally And it will catch any Error leaving our app from any component !

// request
// this request error it will not console.log anything becouse it is make to handle errors like there is no internet errors and stuff like that
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    //We do this to forward the catch error and send here so we can handle it globally as well
    return Promise.reject(error);
  }
);

// response
// this one it will work as the normal fetch we do so it will log the response that we fetching and it will catch the error if it is happining

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

// this one we can use as baseURL So we can use it here instead of write it everytime where we want to post or delete or what ever
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

// these for the things for the defaults stuff we used to do Like Autorization and Content-Type
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Now if I want to use axios but with some customization for the requests :

ReactDOM.render(<App />, document.getElementById("root"));
