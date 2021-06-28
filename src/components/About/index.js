import React from 'react';
import photo from '../../assets/images/photo.jpg'

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">About Me</h1>
      </div>
      <div className="center">
        <img
          src={photo}
          alt="Julia Tocker"
          className="photo"
        />  
      </div>
      <div>
        <p>
          I'm an up and coming developer in Austin, Texas. 
          In addition to coding I am a chef and a musician. 
        </p>
      </div>
    </section>
  );
}

export default About;