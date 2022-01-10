import React, { useState, useEffect } from "react";
import "./Slider.css";
import axios from "axios";

import apiCall from "../../helpers/apiCall";
import "antd/dist/antd.css";
import { Carousel } from "antd";

export default function Slider() {
  const [posts, setPosts] = useState([]);
  const search = "";

  useEffect(() => {
    console.log("apiCall");
    const fetchPosts = async () => {
      const res = await axios.get(apiCall + "/posts" + search);

      setPosts(res.data.data.slice(0, 3));
      console.log("9999999", posts);
    };
    fetchPosts();
    // loadImages();
  }, []);

  return (
    <Carousel autoplay effect="fade">
     {(posts.map((post)=>( 
     <div className="slider" >
        <div class="sliderImage" style={{background:`url(${post?.photo})`,backgroundSize:"cover"}} >
          <div className="sliderTitles">
            <span className="largeTitle">{post?.title}</span>

            {/* <span className="largeTitle">
            SheCanCode aims at creating a vibrant community of amazing young
            Rwanda women who are passionate about using technology to change
            Africa and beyond.
          </span> */}
            <p className="smallParagraph">{new Date(post?.createdAt).toDateString()}</p>
            <button className="smallButton">READ</button>
          </div>
      
        </div>
      </div>)))}
    </Carousel>
  );
}
