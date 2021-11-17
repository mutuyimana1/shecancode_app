import React from 'react'
import "./Sidebar.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DropDownList } from "@progress/kendo-react-dropdowns";




export default function Sidebar() {
    
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    getPosts();
  }, []);
    
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <div className="sidebarTitle">ABOUT CODING</div>
                <img className="sidebarImg" src="https://www.shecancodeschool.org/images/cases/case3.jpg"/>
                <p>Lorem ipsum dolor sit amet 
                     adipisicing elit. Vitae cum fuga 
                     animi corrupti impedit ea. Quas 
                     vitae, exercitationem saepe 
                     accusantium tempora ducimus
                </p>
            </div>
            <div className="sidebarItem">
            <div className="sidebarTitle">CATEGORIES</div>
            <ul className="sidebarList">
                {posts.map((post) => (
            <Link to={`/?cat=${post.category} `} className="link">
            {/* <Link to={`/Post/${post.cat}`} className="link"> */}

            <li className="sidebarListItem">{post.category}</li>
            </Link>
         
            
          ))}


        </ul>
        {/* <section className="k-my-8">
          <form className="k-form k-mb-4">
            <label className="k-label k-mb-3">Category</label>
            <DropDownList data={posts.map(function(c) {return c.categories;})} />
          </form>
        </section> */}
      
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">FOLLOWERS/SOCIAL MEDIA</div>
                <div className="sidebarosial">
                    <i className="sidebaricon fab fa-facebook-square"></i>
                    <i className="sidebaricon fab fa-twitter-square"></i>
                    <i className="sidebaricon fab fa-linkedin"></i>            
                    <i className="sidebaricon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
