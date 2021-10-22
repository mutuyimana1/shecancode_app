import { useLocation } from "react-router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

import "./singlePost.css"


export default function SinglePost() {
    const PF = "http://localhost:5000/images/";

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});

    
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
    //   setTitle(res.data.title);
    //   setDesc(res.data.desc);
    };
    getPost();
  }, [path]);


    return (
        <div className="singlepost">
            <div className="singlePostItem">
            {post.photo && <img className="singlePostImage" src={PF + post.photo} alt="" />}

            </div>
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
            <h1 className="singlePostTitle">{post.title}
           

            <div className="editPost">
            <i className="editicon  fas fa-edit"></i>
            <i className="editicon fas fa-edit"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="author">
                    <b> Author: {post.username}</b>
                </span>
                <span className="author">
                    <b> {new Date(post.createdAt).toDateString()}</b>
                </span>
                
            </div>
            <p className="singlePostDescr">{post.desc}</p>
        </div>
    )
}
