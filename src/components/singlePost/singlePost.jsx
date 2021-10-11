import React, { createFactory } from 'react'
import "./singlePost.css"

export default function singlePost() {
    return (
        <div className="singlepost">
            <div className="singlePostItem">
            <img className="singlePostImage" src="https://www.shecancodeschool.org/images/cases/case3.jpg"/>

            </div>
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet,

            <div className="editPost">
            <i className="editicon  fas fa-edit"></i>
            <i className="editicon fas fa-edit"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="author">
                    <b> Author: Karangwa Yvo</b>
                </span>
                <span className="author">
                    <b> one hour ago</b>
                </span>
                
            </div>
            <p className="singlePostDescr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet commodi sequi exercitationem hic quasi laborum. Temporibus in vero omnis dolor obcaecati, dol
                laborum corrupti fugit aut expedita ipsum neque! Voluptate?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet commodi sequi exercitationem hic quasi laborum. Temporibus in vero omnis dolor obcaecati, dol
                laborum corrupti fugit aut expedita ipsum neque! Voluptate?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet commodi sequi exercitationem hic quasi laborum. Temporibus in vero omnis dolor obcaecati, dol
                laborum corrupti fugit aut expedita ipsum neque! Voluptate?</p>
        </div>
    )
}
