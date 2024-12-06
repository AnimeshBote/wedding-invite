import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLeaf } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.from(".hero-text", { y: 50, opacity: 0, duration: 1, delay: 0.5 });
    gsap.from(".hero-subtext", { y: 30, opacity: 0, duration: 1, delay: 1 });
    gsap.from(".hero-leaf", { scale: 0, duration: 1, delay: 1.5, stagger: 0.2 });
  }, []);

  return (
    <HomeWrapper>
      <HeroSection>
        <HeroText>
          <h1 className="hero-text">Ani & Anks Wedding</h1>
          <p className="hero-subtext">
            Join us in celebrating love, laughter, and tradition!
          </p>
          <div className="hero-icons">
            <FaLeaf className="hero-leaf" />
            <FaLeaf className="hero-leaf" />
            <FaLeaf className="hero-leaf" />
          </div>
        </HeroText>
      </HeroSection>
      <PatternOverlay />
    </HomeWrapper>
  );
};

export default HomePage;

const HomeWrapper = styled.div`
  font-family: "Mukta Vaani", sans-serif;
  overflow: hidden;
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #ff5d5d, #f6c343);
  position: relative;
  color: white;
  text-align: center;
  padding: 2rem;
`;

const HeroText = styled.div`
  max-width: 600px;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 8px #000;
  }

  p {
    font-size: 1.2rem;
    margin-top: 1rem;
    text-shadow: 1px 1px 5px #000;
  }

  .hero-icons {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;

    .hero-leaf {
      font-size: 2rem;
      color: #ffd700;
      filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5));
    }
  }
`;

const PatternOverlay = styled.div`
  position: absolute;A
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("../assets/pattern1.jpg") repeat;
  opacity: 0.2;
  pointer-events: none;F
  z-index: 0;
`;
