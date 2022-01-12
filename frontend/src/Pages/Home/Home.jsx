import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import Post from "../../components/Post/Post";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";
import "@progress/kendo-theme-default/dist/all.css";

export default function Home() {
  // const [posts, setPosts] = useState([]);
  // const { search } = useLocation();
  // const [visible,setVisible] = useState(2);

  // const loadMore =() =>{
  //   setVisible((prevValue) => prevValue = 3);

  // };
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts" + search);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // },[search]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            {/* <div className="col-lg-1"></div> */}

            <Slider />
          </div>
        </div>
      </div>
      <div className="search">
      <SearchBar />
      </div>
    
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Post />
          </div>
          {/* <div className="col-md-1"> */}
            {/* <Sidebar/> */}
            {/* </div> */}
        </div>
      </div>
    </>
  );
}
