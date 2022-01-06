import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import Post from "../../components/Post/Post";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar"
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
         <Slider/>
         <SearchBar/>
        <div className="container-fluid">
          <div className="row">

          <div className="col-md-1"></div>
            <div className="col-md-10">
            {/* <Post/> */}
            <Post/>
            
            {/* <button onClick={loadMore} className="loadMoreButton"> RoadMore</button> */}

            </div>     
          <div className="col-md-1">
               {/* <Sidebar/> */}
          </div>
          </div>
        </div>

        </>
    );
}
