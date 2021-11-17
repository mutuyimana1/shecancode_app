import React from 'react'
import "./Sidebar.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { DropDownList } from "@progress/kendo-react-dropdowns";




export default function Sidebar() {
    
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/category/all");
      console.log("hhhdhdhhd",res)
      setCats(res.data.data);
    };
    getCats();
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
<<<<<<< HEAD
                {posts.map((post) => (
            <Link to={`/?cat=${post.category} `} className="link">
            {/* <Link to={`/Post/${post.cat}`} className="link"> */}

            <li className="sidebarListItem">{post.category}</li>
=======
                {cats.map((c) => (
            <Link to={`/?Single=${c.id}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
>>>>>>> 9344f642762c9903386ceef2cc2a2f2abbbd046a
            </Link>
         
            
          ))}


        </ul>
        {/* <section className="k-my-8">
          <form className="k-form k-mb-4">
            <label className="k-label k-mb-3">Category</label>
<<<<<<< HEAD
            <DropDownList data={posts.map(function(c) {return c.categories;})} />
=======
            <DropDownList data={cats.map(function(c) {return c.categories;})} />
>>>>>>> 9344f642762c9903386ceef2cc2a2f2abbbd046a
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
