import React, { useEffect, useRef, useState } from 'react';
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

  const audioRef = useRef(null);
  const [toggleButtonUsed, setToggleButtonUsed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current) {
        audioRef.current.pause();
        setIsMuted(true);
      }
    };
    const playAudio = () => {
      if (audioRef.current) {
        console.log('before : ', isMuted);
        if (!toggleButtonUsed) {
          audioRef.current.play();
          setIsMuted(false);
          console.log('Shaadi me zaroor aana', isMuted);
        }

      }
    };
    document.addEventListener('click', playAudio);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('click', playAudio);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMuted, toggleButtonUsed]);

  const locationUrl = "https://maps.app.goo.gl/EC2dpwdGseVpzdZp7";
  const handleNavigateToLocation = () => {
    window.open(locationUrl, "_blank"); // Open in a new tab
  };

  const toggleMute = (event) => {
    setToggleButtonUsed(true);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
    event.stopPropagation();
  };
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
      <audio id="my_audio" ref={audioRef} src="./assets/mp3/song.mp3"></audio>
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
              <video src={slide.src} autoPlay muted loop playsInline />
            )}
          </div>
        ))}
        <div
          onClick={toggleMute}
          style={{
            position: "absolute",
            top: "10px",
            right: "50px",
            width: "50px",
            height: "50px",
            background: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
            backdropFilter: "blur(10px)", // Glassy effect
            webkitBackdropFilter: "blur(10px)", // For Safari support
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.5)", // Optional border for a frosted look
            zIndex: 3,
          }}
        >
          {isMuted ? (
            // Unmuted Icon (Speaker with sound waves)
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
              <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06m7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-volume-up-fill" viewBox="0 0 16 16">
              <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
              <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
              <path d="M8.707 11.182A4.5 4.5 0 0 0 10.025 8a4.5 4.5 0 0 0-1.318-3.182L8 5.525A3.5 3.5 0 0 1 9.025 8 3.5 3.5 0 0 1 8 10.475zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06" />
            </svg>
          )}
        </div>

        <div
          onClick={handleNavigateToLocation}
          style={{
            position: "absolute",
            top: "10px", // Positioned at the top
            left: "50px", // Positioned to the left
            width: "50px",
            height: "50px",
            background: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
            backdropFilter: "blur(10px)", // Glassy effect
            webkitBackdropFilter: "blur(10px)", // Safari support
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.5)", // Optional frosted look
            zIndex: 3,
          }}
        >
          {/* Google Maps SVG Icon */}
          <svg xmlns="http://www.w3.org/2000/svg"
            aria-label="Google Maps" role="img"
            viewBox="0 0 512 512">

            <rect
              width="512" height="512"
              rx="15%"
              fill="rgb(255, 255, 255,0)" />

            <clipPath id="a">

              <path d="M375 136a133 133 0 00-79-66 136 136 0 00-40-6 133 133 0 00-103 48 133 133 0 00-31 86c0 38 13 64 13 64 15 32 42 61 61 86a399 399 0 0130 45 222 222 0 0117 42c3 10 6 13 13 13s11-5 13-13a228 228 0 0116-41 472 472 0 0145-63c5-6 32-39 45-64 0 0 15-29 15-68 0-37-15-63-15-63z" />

            </clipPath>

            <g stroke-width="130" clip-path="url(#a)">

              <path stroke="#fbbc04" d="M104 379l152-181" />

              <path stroke="#4285f4" d="M256 198L378 53" />

              <path stroke="#34a853" d="M189 459l243-290" />

              <path stroke="#1a73e8" d="M255 120l-79-67" />

              <path stroke="#ea4335" d="M76 232l91-109" />

            </g>

            <circle cx="256" cy="198" r="51" fill="#ffffff" />

          </svg>
        </div>

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
