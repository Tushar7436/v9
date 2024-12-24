import { useEffect } from 'react';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import "../Styles/About.css";

export const AboutUs = () => {
    useEffect(() => {
      const splitTypes = document.querySelectorAll('.reveal-type');
  
      splitTypes.forEach((char) => {
        const bg = char.getAttribute('data-bg-color');
        const fg = char.getAttribute('data-fg-color');
        const text = new SplitType(char, { types: 'chars' });

        gsap.fromTo(
          text.chars,
          { color: bg },
          {
            color: fg,
            duration: 0.5,
            stagger: 0.06,
            scrollTrigger: {
              trigger: char,
              start: 'top 80%', // Randomized start position
              end: 'top 80%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none',
            },
          }
        );
      });
  
      // Initialize Lenis for smooth scrolling
      const lenis = new Lenis();
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }, []);
  
    return (
      <div className="about-us-container">
        <div className="About-heading">About Us</div>
        <div className="about-us">
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="white">IEEE VIT Bhopal </span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="transparent"></span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="white">empowers Students </span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="transparent"></span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="#d3ffca">to Innovate,</span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="transparent"></span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="#d3ffca">Collaborate</span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="transparent">.</span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="white">and</span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="transparent">.</span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="white">Excel</span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="transparent">.</span>
          <span className="reveal-type" data-bg-color="transparent" data-fg-color="white">in Advancing technology.</span>
        </div>
      </div>
    );
  };
 