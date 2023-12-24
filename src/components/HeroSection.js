import '../App.css';
import { Button } from './Button.js';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>UNLOCK YOUR TRUE POTENTIAL</h1>
      <p>Studying alone? Not Anymore!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BROWSE ROOMS
        </Button>

        <a
          className='btns'
          href='https://youtu.be/pUnU07e81GA?si=pvQ1Pd6UiIE1E4Dy'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='btn--primary btn--large'>
          WATCH VIDEO 
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
