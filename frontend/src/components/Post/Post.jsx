import "./Post.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import apiCall from "../../helpers/apiCall";


import { useContext, useEffect, useState } from "react";

export default function Post({post}) {
 
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [visible,setVisible] = useState(4);




  const loadMore =() =>{
    setVisible((prevValue) => prevValue = 10);

  };
 

  useEffect(() => {
    // console.log(apiCall);
    const fetchPosts = async () => {
      const res = await axios.get(apiCall+"/posts" + search);
      console.log("<><<>",res);
      setPosts(res.data.data);
    };
    fetchPosts();
    // loadImages();

  },[search]);
 
  
  return (
    <div className="post">
              <div className ="containerposts">
                <div className="row">
                 

      {posts.slice(0,visible).map(post =>(
        <div className="col-md-6  card">

      
       {post.photo && <img className="postImage" src={post.photo} alt="" />}
     

      <div className="postInfod">
        
        <Link to={`/Single/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
          {/* <span className="postTitle">{post.categories}</span> */}

        </Link>
        <hr/>
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      
        {/* <p className="postDesc">{post.desc}</p> */}
        <div className="postDesc"
              dangerouslySetInnerHTML={{
                __html:post.desc
              }}
            />
        <Link to={`/Single/${post._id}`} className="link">
        <button className="read-more">Read More</button>
        </Link>
        

      
      </div>
        </div>
      ))} 
      </div>
      </div>
      <div class="containerbuttonForMore">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
          <button onClick={loadMore} className="loadMoreButton"> RoadMore</button>
          <div class="col-lg-4"></div>


          </div>
        </div>
      </div>
  
    </div>
    
    
  );
  
  
}