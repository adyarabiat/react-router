import axios from "axios";

// So here I'm creating instance which is overwritting anything that i have done in the global index.js
// but if there is things there I did not overwrite it here it will leave how it is

// So here will follow what we doing here and in the index.js it will fire out when I fetch something not costomized i did it so it will do it for me globally
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

instance.defaults.headers.common["Authorization"] = "AUTH TOKEN";

export default instance;
