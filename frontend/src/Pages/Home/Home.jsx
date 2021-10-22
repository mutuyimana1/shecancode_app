import { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  },[search]);
  return (
        <>
         <Slider/>
        <div className="home">
        <Posts posts={posts} />
        <Sidebar/>
        </div>
        </>
    );
}
