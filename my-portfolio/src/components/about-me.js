import React from "react";
import "./about-me.css";
import me from '../images/me.jpeg';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import github from '../images/github.png';

function AboutMe() {
  return (
    <section id="about">
      <div class='info_container'>
        <h1 className="about_heading">Hello, I'm Harshit Patel</h1>
        <p>I am a student at Rutgers University studying Computer Science with a minor in Data Science and Quantitative Economics.</p>
        <div class="socials_container">
        <a href="https://www.linkedin.com/in/harshitp1206/" target="_blank" aria-label="LinkedIn">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/Hxrshmxllow" target="_blank" aria-label="GitHub">
          <img src={github} alt="GitHub" />
        </a>
        <a href="mailto:harshitcp06@gmail.com" aria-label="Email">
          <img src={email} alt="Email" />
        </a>
        </div>
      </div>
      <div class='image_container'>
        <img
          src={me}
          alt='me'
        />
      </div>
    </section>
  );
}

export default AboutMe;