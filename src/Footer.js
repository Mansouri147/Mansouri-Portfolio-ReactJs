import React from 'react'
import "./Footer.scss";
import LinkedInLogo from "./static/images/footer_images/kisspng-linkedin-download-computer-icons-clip-art-lord-vector-5ad8ed33da0bd1.png"
import LinksLogo from "./static/images/footer_images/links-icon-10.png"
import GitHubLogo from "./static/images/footer_images/github_outside_shape.png"

function Footer() {
  return (
    <div className="find_me_online">
      <a href="https://www.linkedin.com/in/mansouri147" target="_blank" ><img src={LinkedInLogo} alt="" />/mansouri147</a>
      <a href="https://mansouri-portfolio.herokuapp.com/"><img src={LinksLogo} alt="" />Old same Portfolio made with django</a>
      <a><img src={LinksLogo} alt="" />mansouriwhafidoumansouri<br />@gmail.com</a>
      <a href="https://stackoverflow.com/users/13021632/mansouriala" target="_blank" ><img src={LinksLogo} alt="" />Stack Overflow</a>
      <a href="https://github.com/Mansouri147" target="_blank" ><img src={GitHubLogo} alt="" />/mansouri147</a>
      <p>created by Mansouri available on github</p>
    </div>
  )
}

export default Footer
