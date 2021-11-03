import React from 'react'
import Post from "../Post/Post"
import "./Posts.css"

export default function Posts({posts}) {
    return (
        <div className="posts">

        {posts.map((p) =>(
        <Post post={p} />

        ))}
      
        {/* <div className="buttonMore">
        <button className="more-news">ROAD MORE </button>
        </div> */}
            
        </div>
    )
}