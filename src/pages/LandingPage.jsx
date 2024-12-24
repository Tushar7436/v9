import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "../Styles/LandingPage.css";
import { useNavigate } from "react-router";
import { Footer } from "../components/Footer";
import { Work } from '../components/OurWork';
import { AboutUs } from '../components/AboutUs';

import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img2.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
const images = [img1, img2, img3, img4];
gsap.registerPlugin(ScrollTrigger);


export const LandingPage = () =>{
  const navigate = useNavigate();

  function handleClick(event) {
    const targetClass = event.target.className;
    if (targetClass === 'Community') {
      navigate('/Community');
    }
    if (targetClass === 'Events') {
      navigate('/Events');
    }
    if (targetClass === 'Join-us') {
      navigate('/Signup');
    }
  };
 
  const GalleryPhotos =() => {
    return(
      <div className="Gallery-container">
        <div className="Gallery-wrapper">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Gallery Image ${index + 1}`} />
            ))}
        </div>
      </div>  
    );
  };      
  
  const ScrollMarquee = () => {
    return (
      <div>
        <div className="item item1">
        <div className="leading-relaxed text-white p-8 rounded-lg max-w-md mx-auto shadow-lg">
          <h1 className=" leading-loose text-2xl  tracking-wider md:text-3xl text-green-300 mb-4">
            "We're delighted with our development subscription from AAA"
          </h1>
          <p className="text-gray-500 mb-6">
            Their flexible subscription-based model is so innovative, we can just pause it whenever we want!
          </p>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-white">Peter Davis</p>
              <p className="text-sm text-green-400">CTO - Atomic</p>
            </div>
          </div>
        </div>
        </div>
        <div className="item item2">
        <div className="leading-relaxed text-white p-8 rounded-lg max-w-md mx-auto shadow-lg">
          <h1 className=" leading-loose text-2xl  tracking-wider md:text-3xl text-green-300 mb-4">
            "We're delighted with our development subscription from AAA"
          </h1>
          <p className="text-gray-500 mb-6">
            Their flexible subscription-based model is so innovative, we can just pause it whenever we want!
          </p>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-white">Peter Davis</p>
              <p className="text-sm text-green-400">CTO - Atomic</p>
            </div>
          </div>
        </div>
        </div>
        <div className="item item3">
        <div className="leading-relaxed text-white p-8 rounded-lg max-w-md mx-auto shadow-lg">
          <h1 className=" leading-loose text-2xl  tracking-wider md:text-3xl text-green-300 mb-4">
            "We're delighted with our development subscription from AAA"
          </h1>
          <p className="text-gray-500 mb-6">
            Their flexible subscription-based model is so innovative, we can just pause it whenever we want!
          </p>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-white">Peter Davis</p>
              <p className="text-sm text-green-400">CTO - Atomic</p>
            </div>
          </div>
        </div>
        </div>
        <div className="item item4">
        <div className="leading-relaxed text-white p-8 rounded-lg max-w-md mx-auto shadow-lg">
          <h1 className=" leading-loose text-2xl  tracking-wider md:text-3xl text-green-300 mb-4">
            "We're delighted with our development subscription from AAA"
          </h1>
          <p className="text-gray-500 mb-6">
            Their flexible subscription-based model is so innovative, we can just pause it whenever we want!
          </p>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-white">Peter Davis</p>
              <p className="text-sm text-green-400">CTO - Atomic</p>
            </div>
          </div>
        </div>
        </div>        
        <div className="item item5">
        <div className="leading-relaxed text-white p-8 rounded-lg max-w-md mx-auto shadow-lg">
          <h1 className=" leading-loose text-2xl  tracking-wider md:text-3xl text-green-300 mb-4">
            "We're delighted with our development subscription from AAA"
          </h1>
          <p className="text-gray-500 mb-6">
            Their flexible subscription-based model is so innovative, we can just pause it whenever we want!
          </p>
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-white">Peter Davis</p>
              <p className="text-sm text-green-400">CTO - Atomic</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };
    

  return(
    <div className ="landing-page">
      <div className="first-line">IEEE Student Branch</div>
      <div className="second-line">Let's gooo!!!</div>
      {/* <div className="third-line">----------------------------------<div>------------------</div></div> */}
      <div className= "Navigate">      
        <div className="Community" onClick={handleClick}>Community</div>
        <div className="Events" onClick={handleClick}>Events<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></div>
      </div>
      <div className="about-us-container"><AboutUs/></div>
      <div className="Gallery">
        <div className="Gallery-heading">A Peek through IEEE Stories</div>
        <div><GalleryPhotos/></div>
      </div>
      <div className ="OurWork"><Work /></div>
      <section className="Scroll-marquee">
        <h2 className="text-8xl mb-10 ml-1 tracking-tight pb-2">What our <span className="text-green-200 ">client</span><span className="text-8xl mb-10 ml-1 tracking-tight"> say</span></h2><ScrollMarquee />
      </section>
      <section><Footer/></section>
    </div>
  );
}
