import React from 'react'
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footerMain">
            <footer class="footer">
                <div class="footer__addr">
                {/* <div className="left"> */}
                <h2><img className="logo" src="https://www.shecancodeschool.org/uploads/logos1.png"/></h2>

            {/* </div> */}
                    {/* <h1 class="footer__logo">SheCanCODE</h1> */}
                    <h2>Contact</h2>
                    <address>
                        KG 549 St 36 Kigali-Rwanda
                       <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>
                <ul class="footer__nav">
                    <li class="nav__item">
                        <h2 class="nav__title">Media</h2>
                <ul class="nav__ul">
                    <li><a href="#">Online-class</a></li>
                    <li><a href="#">Print</a></li><li>
                        <a href="#">Alternative Ads</a>
                    </li>
                </ul>
                </li>
                <li class="nav__item nav__item--extra">
                  <h2 class="nav__title">Technology</h2>
                <ul class="nav__ul nav__ul--extra">
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Technology </a></li>
                    <li><a href="#">Language </a></li>
                    <li><a href="#">ReactJS</a></li>
                    <li><a href="#">NodeJS</a></li>
                    <li><a href="#">Hackton</a></li>
                </ul>
                </li>
                <li class="nav__item">
                    <h2 class="nav__title">Legal</h2>
                <ul class="nav__ul"> 
                <li><a href="#">Privacy Policy</a></li>
                <li> <a href="#">Terms of Use</a></li>
                {/* <li><a href="#">Sitemap</a></li> */}
                </ul>
                </li>
                </ul>
    <div class="legal">
         <p>&copy; 2021 SheCanCODE. All rights reserved.</p>
         <div class="legal__links">
             <span>Developed with<span class="heart">♥</span>by SheCan<span>CODE</span></span>
        
          </div>
    </div>
</footer>
            
        </div>
    )
}
