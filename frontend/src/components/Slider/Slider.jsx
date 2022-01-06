import React from "react";
import "./Slider.css";

import "antd/dist/antd.css";
import { Carousel } from "antd";

export default function Slider() {
  return (

    <Carousel autoplay effect="fade">

    <div className="slider">
      <div class="sliderImage">
        <div className="sliderTitles">
          <span className="smallTitle">FEATURED POST</span>

          {/* <span className="largeTitle">
            SheCanCode aims at creating a vibrant community of amazing young
            Rwanda women who are passionate about using technology to change
            Africa and beyond.
          </span> */}
          <p className="smallParagraph">24 JAN 2022</p>
          <button className="smallButton">READ</button>

        </div>
         <img className="sliderImage" 
            src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/>
           
      </div>
    </div>
      <div className="slider">
        <div class="sliderImage">
          <div className="sliderTitles">
            <span className="smallTitle">FEATURED POST</span>

            {/* <span className="largeTitle">
              SheCanCode aims at creating a vibrant community of amazing young
              Rwanda women who are passionate about using technology to change
              Africa and beyond.
            </span> */}
           <p className="smallParagraph">24 JAN 2022</p>
          <button className="smallButton">READ</button>
          </div>
          <img className="sliderImage" 
              src="https://pbs.twimg.com/media/FGF_CEAXsAUxVeV?format=jpg&name=large"/>
            
        </div>
      </div>
    </Carousel>
  );
}
