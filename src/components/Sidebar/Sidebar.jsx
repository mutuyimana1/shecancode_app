import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
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
                    <li className="sidebarListItem">Graduation</li>
                    <li className="sidebarListItem">On campus</li>
                    <li className="sidebarListItem">News</li>
                    <li className="sidebarListItem">Application</li>


                </ul>
            </div>
            <div className="sidebarItem">
                <div className="sidebarTitle">FOLLOERS/SOCIAL MEDIA</div>
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
