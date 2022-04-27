import React from "react"
import css from "./App.module.css"
import bgImage from './assets/bg.png'
import logo from './assets/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome,faReddit, faInstagram,faDiscord} from '@fortawesome/free-brands-svg-icons'

import ReactPlayer from 'react-player/youtube'

function App() {
  return (
  <div className={css.container}>
      <div
       className={css.backgroundImage}
       style={{
        backgroundImage:`url(${bgImage})`,
        position:"fixed",
        backgroundSize:"cover",
        width:"100%",
        height:"464px",
        backgroundSize:"cover",
        // top:"10px"
        // backgroundPosition: "top"
      }}>
    {/* <img src={bgImage}/> */}
      <div className={css.NavBar}>
        <div className={css.logoWrapper}>
          <img src={logo} alt="Logo" className={css.logo} style={{ width: "150px" }} />
        </div>
        <div className={css.socialIconsWrapper}>
          <FontAwesomeIcon icon={faTwitter} className={css.icon} />
          <FontAwesomeIcon icon={faReddit} className={css.icon} />
          <FontAwesomeIcon icon={faInstagram} className={css.icon} />
          <FontAwesomeIcon icon={faDiscord} className={css.icon} />
          <FontAwesomeIcon icon={faFontAwesome} className={css.icon} />
        </div>
      </div>
      <div className={css.headerSection}>
        <span className={css.styledHeaderText}>
          COMMING SOON
        </span>
        <span className={css.headerTextTitle}>
          THE CYBERHIPPOZ PROJECT
        </span>
        <span className={css.headerTextTitle}>
          (HIP)
        </span>
        <span className={css.headerTextSubTitle}>
          A collection of <span>10,000 highly advanced hippos </span>, from the <br />digital planet Potomia, living on the ethereum blockchain
        </span>
      </div>
      <div className={css.aboutsection}>
    <div className={css.aboutText}>
      WELCOME TO POTOMIA.
    </div>
    <div className={css.youtubeSection}>
    {/* <div className={css.playerwrapper}> */}
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' className={css.player}/>
      {/* </div> */}
    </div>
    <div className={css.footerIcons}>
      <FontAwesomeIcon icon={faTwitter} className={css.icon} />
      <FontAwesomeIcon icon={faReddit} className={css.icon} />
      <FontAwesomeIcon icon={faInstagram} className={css.icon} />
      <FontAwesomeIcon icon={faDiscord} className={css.icon} />
      <FontAwesomeIcon icon={faFontAwesome} className={css.icon} />
    </div>
 </div> 
    </div>
    {/* About section */}

  
  </div>
  );
}

export default App;
