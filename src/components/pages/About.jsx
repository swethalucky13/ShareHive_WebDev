import React from 'react';
import '../../../src/components/About.css';
import Footer from '../../../src/components/Footer';
//import './About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About</h1>
      <div className='about-content'>
      <p>Welcome to our innovative online study platform where learning knows no language boundaries. With cutting-edge speech recognition technology, we empower learners to express themselves naturally in their native language, while our translation feature opens doors to new horizons. Personalized learning pathways, a rich repository of resources, and a vibrant community make education engaging and accessible to all. We're on a mission to make learning a seamless and immersive experience, evolving with your feedback and needs, ensuring you're always ready to explore the world of knowledge. Join us and embark on a limitless educational adventure.</p>
      </div>
      <h2>Meet the Team</h2>

      <div className="team-member">
        <img src="images/team-member1.jpg" alt="Team Member 1" />
        <h3>Swetha Bommireddy</h3>
        <p>Team Member</p>
      </div>

      <div className="team-member">
        <img src="images/team-member2.jpeg" alt="Team Member 2" />
        <h3>Usha</h3>
        <p>Team Member</p>
      </div>

      <div className="team-member">
        <img src="images/team-member3.jpg" alt="Team Member 3" />
        <h3>Soumya</h3>
        <p>Team Member</p>
      </div>

      <div className="team-member">
        <img src="images/team-member4.jpeg" alt="Team Member 4" />
        <h3>Ridhi</h3>
        <p>Team Member</p>
      </div>
      <Footer />
      </div>
      
      
  );
}

export default About;
