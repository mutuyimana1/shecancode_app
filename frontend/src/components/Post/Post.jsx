import "./Post.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import apiCall from "../../helpers/apiCall";

import { useContext, useEffect, useState } from "react";
import { List } from "antd";
import { Carousel } from "antd";


export default function Post({ post }) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prevValue) => (prevValue = 100));
  };

  useEffect(() => {
    // console.log(apiCall);
    const fetchPosts = async () => {
      const res = await axios.get(apiCall + "/posts" + search);
      console.log("<><<>", res);
      setPosts(res.data.data);
    };
    fetchPosts();
    // loadImages();
  }, [search]);

  return (
    
    <div className="post">
      <div className="container-fluidgit ">
        <div className="row" >

          <List
           grid={{
            column:2,gutter:16
          }}
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 4,
            }}
            dataSource={posts}
            // footer={
              // <div>
              //   <b>SheCanCODE Blogs List</b> 
              // </div>
            // }
            renderItem={(post) => (
            
              <div className="col-md-11 card">
              {post.photo && (
                <img className="postImage" src={post.photo} alt="" />
              )}

              <div className="postInfo">
                <Link to={`/Single/${post._id}`} className="link">
                  <span className="postTitle">{post.title}</span>
                  {/* <span className="postTitle">{post.categories}</span> */}
                </Link>
                <hr />
                <span className="postDate">
                  {new Date(post.createdAt).toDateString()}
                </span>

                {/* <p className="postDesc">{post.desc}</p> */}
                <div
                  className="postDesc"
                  dangerouslySetInnerHTML={{
                    __html: post.desc,
                  }}
                />
                <Link to={`/Single/${post._id}`} className="link">
                  <button className="read-more">Read More ...</button>
                </Link>
              </div>
            </div>
            )}
          />

       
        </div>
      </div>
      <div class="containerbuttonForMore">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            {/* <button onClick={loadMore} className="loadMoreButton">
              {" "}
              RoadMore
            </button> */}
            <div class="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
   
  );
}
