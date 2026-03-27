import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default api;


// api.post("/posts", {
//   title: "New Post",
//   body: "Hello world",
//   userId: 1
// })
// .then(res => console.log(res.data));