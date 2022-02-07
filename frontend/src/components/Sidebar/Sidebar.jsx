import React from "react";
import "./Sidebar.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import apiCall from "../../helpers/apiCall";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(apiCall + "/category/all");
      console.log("hhhdhdhhd", res);
      setCats(res.data.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT SHECANCODE</div>
        <img
          className="sidebarImg"
          src="https://www.shecancodeschool.org/images/cases/case3.jpg"
        />
        <p>
          SheCanCode School of coding, a project launched by Igire Rwanda
          Organization( IR0) in collaboration with USA Embassy Kigali aiming to
          bridge the digital skills gap by inspiring women to enter and remain
          in tech industry.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c._id} `} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOWERS/SOCIAL MEDIA</div>
        <div className="sidebarosial">
          <i className="sidebaricon fab fa-facebook-square"></i>
          <i className="sidebaricon fab fa-twitter-square"></i>
          <i className="sidebaricon fab fa-linkedin"></i>
          <i className="sidebaricon fab fa-instagram-square"></i>
          {/* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">It was a surreal experience being a part of the <a href="https://twitter.com/YouthConnektAf?ref_src=twsrc%5Etfw">@YouthConnektAf</a> summit. Being a part of the energy the youth have to lead to new frontiers of change and more involvement <a href="https://twitter.com/hashtag/YCA2019?src=hash&amp;ref_src=twsrc%5Etfw">#YCA2019</a> <a href="https://t.co/8BHIp3CXPr">pic.twitter.com/8BHIp3CXPr</a></p>&mdash; SheCanCode-Rwanda (@ShecancodeRW) <a href="https://twitter.com/ShecancodeRW/status/1182906540665266176?ref_src=twsrc%5Etfw">October 12, 2019</a></blockquote> 
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
        </div>
      </div>
    </div>
  );
}
