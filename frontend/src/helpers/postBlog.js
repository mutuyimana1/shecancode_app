import axios from "axios";
import {notification} from "antd";


const registerPost = async(data) => {

// console.log("XXXXXXXXXXXXXXXXXXXXXXXXXX")
var config = {
  method: "post",
  url: "http://localhost:3030/api/posts",
  headers: {
    "Content-Type": "application/json",
  },
  data: JSON.stringify(data),
};

  return axios(config)
    .then(function (response) {
notification.success({message:"success"})
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        notification.error({message:"failed"})
      console.log(error);
    });
};

export default registerPost;
