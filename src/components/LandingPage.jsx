import { useNavigate } from "react-router";
import "../Styles/LandingPage.css";

export default function LandingPage(){
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
     

  return(
    <div className="landing-page relative z-10 pt-16">
      <div className="flex flex-col items-center justify-center items-center pt-20">
        <div className="font-['Tomorrow','swap'] text-white font-thin z-10 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl pb-2 px-2 pt-5 sm:px-4">
            IEEE STUDENT BRANCH
        </div>
        <div className="font-['Tomorrow','swap'] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-white font-normal pt-3 pb-5">
          Let&apos;s Fly HIGH
        </div>
        <div className= "Navigate pt-6">      
          <div className="Community text-white" onClick={handleClick}>Community</div>
          <div className="Events" onClick={handleClick}>Events<svg xmlns="http://www.w3.org/2000/svg" width="24" height="18"><path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z"/></svg></div>
        </div>
      </div>
    </div>
  );
}
