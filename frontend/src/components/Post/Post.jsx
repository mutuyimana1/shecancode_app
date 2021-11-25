import "./Post.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";
import apiCall from "../../helpers/apiCall";
import { Image } from 'cloudinary-react';//CLOUDINARY IMAGE

import { useContext, useEffect, useState } from "react";

export default function Post({post}) {
  // const PF = "http://localhost:4040/images/";
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const [visible,setVisible] = useState(3);
  const [imageIds, setImageIds] = useState(); //COUDINARY IMAGE



  const loadMore =() =>{
    setVisible((prevValue) => prevValue = 100);

  };
  //COUDINARY
  const loadImages = async () => {
    try {
        const res = await fetch(apiCall+'/images');
        const data = await res.json();
        setImageIds(data);
    } catch (err) {
        console.error(err);
    }
};



  useEffect(() => {
    // console.log(apiCall);
    const fetchPosts = async () => {
      const res = await axios.get(apiCall+"/posts" + search);
      console.log("<><<>",res);
      setPosts(res.data.data);
    };
    fetchPosts();
    loadImages();

  },[search]);
 
  
  return (
    <div className="post">
              <div className ="containerposts">
                <div className="row">
                 

      {posts.slice(0,visible).map(post =>(
        <div className="col-md-6  card">

      
       {/* {post.photo && <img className="postImage" src={post.photo} alt="" />} */}
       {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName="dhzndcjtz"
                            publicId={imageId}
                            // width="300"
                            // crop="scale"
                            className="postImage"
                        />
                    ))}
     

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
        

      
      </div>
        </div>
      ))} 
      </div>
      </div>
      <div class="containerbuttonForMore">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
          {/* <button onClick={loadMore} className="loadMoreButton"> RoadMore</button> */}
          <div class="col-lg-4"></div>


          </div>
        </div>
      </div>
  
    </div>
    
    
  );
  
  
}