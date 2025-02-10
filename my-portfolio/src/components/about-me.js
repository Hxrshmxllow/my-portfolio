import React from "react";
import "./about-me.css";
import me from '../images/me.jpeg';
import linkedin from '../images/linkedin.png';
import email from '../images/email.png';
import github from '../images/github.png';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

function AboutMe() {
  const [showCursor, setShowCursor] = useState(true);
  return (
    <section id="about">
      <div class='info_container'>
       
        <TypeAnimation
          className="about-heading"
          sequence={[
            "Hello, I'm ",
            1000,
            "Hello, I'm Harshit Patel ",
            () => setShowCursor(false),
          ]}
          wrapper="span"
          speed={25}
          cursor={showCursor}
          style={{
            fontSize: '2em',
            display: 'inline-block',
            backgroundImage: 'linear-gradient(to right, #91cae7, #5da6c3)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        />
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