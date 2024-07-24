import './App.css';
import profile from './assets/Profile.jpeg';
import React, {useState, useEffect} from "react";
import IntroVideo from './assets/intro.mp4'
import BgVideo from './assets/videoplayback.mp4'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import CopyToClipboardButton  from './components/CopyToClipboardButton/CopyToClipboardButton'
import background from './assets/bg.avif'
import Education from './components/education/education'
import Work from './components/work/work';
import Tech from './components/tech/tech';
import Me from './components/me/me';
import InTouch from './components/inTouch/inTouch';
import Button from 'react-bootstrap/Button';
import {FaArrowCircleUp} from 'react-icons/fa'; 
import ReactGA from 'react-ga4';
ReactGA.initialize('G-CYTV8YC2S6');


function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  const handleButtonClick = (label) => {
    ReactGA.event({
      category: 'User',
      action: 'Clicked a button',
      label: label
    });
  };
  
  const [colorChange, setColorchange] = useState(false);
    
    const changeNavbarColor = () => {
        if (window.scrollY >= 20) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const [visible, setVisible] = useState(false) 
  
    const toggleVisible = () => { 
      const scrolled = document.documentElement.scrollTop; 
      if (scrolled > 300){ 
        setVisible(true) 
      }  
      else if (scrolled <= 300){ 
        setVisible(false) 
      } 
    }; 
    
    const scrollToTop = () =>{ 
      window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
        /* you can also use 'auto' behaviour 
          in place of 'smooth' */
      }); 
    }; 
    
    window.addEventListener('scroll', toggleVisible); 
  
  return (
    <div>
      <div className={
                    colorChange
                        ? "navbar-solid"
                        : "navbar"
                }>
        <h1>I'm <span className='animate-txt'></span></h1>
      </div>
      <div className="App" style={{ backgroundImage: `url(${background})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover"
                                    }}>
        
        <header className="App-header">
          <video className="video-profile" 
            controls
            src={IntroVideo}
            playing
            poster = {profile}
            type="video/mp4" />
          <p className='font-bold'>
            Goal in life: Make society better place with the help of technology.
          </p>
          <div>
            <a
              className="link"
              href="https://www.linkedin.com/in/kuljeet-singh-bhengura/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
            <span>  </span>
            <a
              className="link"
              href="https://github.com/Kuljeet1998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <span>  </span>
            <CopyToClipboardButton text="kbhengura@gmail.com" icon="email" /><span>  </span>
            <CopyToClipboardButton text="+15713318626" icon="phone" />
          </div>
      
        </header>
      </div>
      <div onScroll={changeNavbarColor}></div>
      <div className='new-section div-center'>
        <Education />
      </div>
      <div className='new-section div-center-2'>
        <Work />
      </div>
      <div className='new-section div-center-2 dark-bg'>
        <Tech />
      </div>
      <div className='new-section div-center-2'>
        <Me />
      </div>
      <div className='div-center-3 overlap'>
        <Button className='top-button'> 
          <FaArrowCircleUp onClick={()=>scrollToTop()}  
          style={{display: visible ? 'inline' : 'none'}} /> 
        </Button>
      </div>
      <div className='new-section div-center-3 dark-bg'>
        <InTouch />
      </div>
      
    </div>
  );
}

export default App;
