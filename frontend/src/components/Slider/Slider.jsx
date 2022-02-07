import React, { useState, useEffect } from "react";
import "./Slider.css";
import axios from "axios";

import apiCall from "../../helpers/apiCall";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

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
      {posts.map((post) => (
        <div className="slider">
          <div
            class="sliderImage"
            style={{
              background: `url(${post?.photo})`,
              backgroundSize: "cover",
              width:"100%",
              backgroundPosition: "center center",

            }}
          >
            <div className="sliderTitles">
              <span className="largeTitle">{post?.title}</span>

              <p className="smallParagraph">
                {new Date(post?.createdAt).toDateString()}
              </p>
              <Link to={`/Single/${post._id}`} className="link">
                <button className="smallButton">READ</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
