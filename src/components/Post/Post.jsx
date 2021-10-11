import React from 'react'
import "./Post.css"

export default function Post() {
    return (
        <div className="Post">
            
            <img className="postImage" src="https://www.shecancodeschool.org/images/cases/case3.jpg"/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">campus</span>
                <span className="postCat">graduation</span>
            </div>
            <span className="postTitle">
                Loren ipsun dolor sit amet
            </span>
            <hr/>
            <span className="postDate">
                1 hour ago
            </span>
        </div> 
        <div className="postDescr">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident qui expedita! Alias,
                 voluptas itaque, neque quisquam corporis nihil porro exercitationem quam dignissimos necessitatibus sapiente hic ipsum,
                 consequatur  quae culpa?
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident qui expedita! Alias,
                 voluptas itaque, neque quisquam corporis nihil porro exercitationem quam dignissimos necessitatibus sapiente hic ipsum,
                 consequatur  quae culpa
                 

            </p>
        </div>

            
        </div>
    )
}
