import { useEffect } from 'react';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import "../Styles/About.css";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// Move Lenis configuration outside component to prevent recreating on each render
const lenis = new Lenis;

export default function AboutUs() {
  useEffect(() => {
    // Setup GSAP animations
    const splitTypes = document.querySelectorAll('.reveal-type');
    const animations = [];

    splitTypes.forEach((char) => {
      const bg = char.getAttribute('data-bg-color');
      const fg = char.getAttribute('data-fg-color');
      const text = new SplitType(char, { types: 'chars' });

      const animation = gsap.fromTo(
        text.chars,
        { color: bg },
        {
          color: fg,
          duration: 0.5,
          stagger: 0.06,
          scrollTrigger: {
            trigger: char,
            start: 'top 90%', 
            end: 'top 100%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none',
          },
        }
      );
      animations.push(animation);
    });

    // Setup Lenis smooth scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      animations.forEach((anim) => anim.kill());
      lenis.destroy();
    };
  }, []);

  // Organize text content for better maintainability
  const textContent = [
    { text: 'IEEE VIT Bhopal ', color: 'white' },
    { text: 'empowers Students ', color: 'white' },
    { text: 'to Innovate,', color: '#d3ffca' },
    { text: 'Collaborate', color: '#d3ffca' },
    { text: '.', color: 'transparent' },
    { text: 'and', color: 'white' },
    { text: '.', color: 'transparent' },
    { text: 'Excel', color: '#d3ffca' },
    { text: '.', color: 'transparent' },
    { text: 'in Advancing technology.', color: 'white' },
  ];

  return (
    <div className="about_us relative z-10">
      <div className="About-heading">About Us</div>
      <div className="about_us_content font-['Tomorrow','swap'] text-lg">
        {textContent.map((item, index) => (
          <span
            key={index}
            className="reveal-type"
            data-bg-color="transparent"
            data-fg-color={item.color}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
};