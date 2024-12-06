import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const slides = [
    { type: "image", src: "./assets/img/card.png", alt: "Invitation Card" },
    { type: "video", src: "./assets/video/1.mp4" },
    { type: "video", src: "./assets/video/2.mp4" },
    { type: "video", src: "./assets/video/3.mp4" },
    { type: "video", src: "./assets/video/4.mp4" },
    { type: "video", src: "./assets/video/5.mp4" },
    { type: "video", src: "./assets/video/6.mp4" },
    { type: "video", src: "./assets/video/7.mp4" },
    { type: "video", src: "./assets/video/8.mp4" },
  ];

  useEffect(() => {
    const playAudio = () => {
      document.getElementById("my_audio").play();
      console.log('Shaadi me zaroor aana');
    };
    document.addEventListener('click', playAudio);
    return () => {
      document.removeEventListener('click', playAudio);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const next = (currentSlide + 1) % slides.length;
    const currentElement = document.querySelector(`.slide[data-index="${currentSlide}"]`);
    const nextElement = document.querySelector(`.slide[data-index="${next}"]`);

    currentElement.classList.remove('active', 'forward', 'backward');
    currentElement.classList.add('inactive');
    nextElement.classList.remove('inactive');
    nextElement.classList.add('active', 'forward');

    setCurrentSlide(next);
  };

  const previousSlide = () => {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    const currentElement = document.querySelector(`.slide[data-index="${currentSlide}"]`);
    const prevElement = document.querySelector(`.slide[data-index="${prev}"]`);

    currentElement.classList.remove('active', 'forward', 'backward');
    currentElement.classList.add('inactive');
    prevElement.classList.remove('inactive');
    prevElement.classList.add('active', 'backward');

    setCurrentSlide(prev);
  };

  return (
    <div>
      <audio id="my_audio" src="./assets/mp3/song.mp3"></audio>
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active forward' : 'inactive'}`}
            data-index={index}
          >
            {slide.type === 'image' ? (
              <img src={slide.src} alt={`Slide ${index}`} />
            ) : (
              <video src={slide.src} autoPlay muted loop playsInline/>
            )}
          </div>
        ))}
        <div className="controls">
          <button onClick={previousSlide}>Previous</button>
          <button onClick={nextSlide}>Next</button>
        </div>
        <Link to="/rsvp">
          <div className='rsvp'><button>RSVP Now</button></div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
