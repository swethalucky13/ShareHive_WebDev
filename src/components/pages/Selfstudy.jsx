// Selfstudy.jsx

import React, { useState, useRef, useEffect } from 'react';
import './login.css';

function Selfstudy() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentVideo, setCurrentVideo] = useState('/videos/video-1.mp4');
  const [currentAudio, setCurrentAudio] = useState(null);
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const timerRef = useRef(null);

  const videos = {
    happy: { video: '/videos/happy.mp4', audio: '/music/chill.mp3' },
    sad: { video: '/videos/sad.mp4', audio: '/music/calm.mp3' },
    excited: { video: '/videos/excited.mp4', audio: '/music/fun.mp3' },
    // Add more videos as needed
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const changeBackground = (videoKey) => {
    setCurrentVideo(videos[videoKey].video);
    setCurrentAudio(videos[videoKey].audio);

    if (isRunning) {
      handleStartStop(); // Stop the timer when changing the video
      handleStartStop(); // Start the timer after changing the video
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // This will reload the video with the new source
    }
  }, [currentVideo]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset the audio to the beginning
      audioRef.current.load();
      audioRef.current.play().catch((error) => {
        // Handle the play() promise rejection (e.g., autoplay policy)
        console.error('Error playing audio:', error);
      });
    }
  }, [currentAudio]);

  return (
    <div className="self-study-container">
      <video ref={videoRef} autoPlay muted loop className="video-background">
        <source src={currentVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <audio ref={audioRef} src={currentAudio} />
      <div className="content">
        <h1>Self Study Timer</h1>
        <div className="timer">{formatTime(time)}</div>
        <div className="controls">
          <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="customization-controls">
          <button onClick={() => changeBackground('happy')}>Theme 1</button>
          <button onClick={() => changeBackground('sad')}>Theme 2</button>
          <button onClick={() => changeBackground('excited')}>Theme 3</button>
          {/* Add more custom backgrounds as needed */}
        </div>
      </div>
    </div>
  );
}

export default Selfstudy;
