import React from 'react';
import '../Components/sidebar.css';
import homeImage from '../assets/home.png';
import exploreImage from '../assets/explore.png';
import shortsImage from '../assets/shorts.png';
import subscriptionImage from '../assets/subscription (1).png';
import libraryImage from '../assets/library.png';
import historyImage from '../assets/history.png';
import yourVideoImage from '../assets/your_video.png';
import watchLaterImage from '../assets/watch_later.png';
import likedImage from '../assets/liked.png';
import downArrowImage from '../assets/down_arrow.png';
import ellipse1Image from '../assets/Ellipse 1 (2).png';
import ellipse2Image from '../assets/Ellipse 1 (1).png';
import hamburgerImage from '../assets/hambarger.png';  
import youtubeLogoImage from '../assets/Youtube logo.png'; 

const Sidebar = () => {
  const mainLinks = [
    { img: homeImage, text: 'Home' },
    { img: exploreImage, text: 'Explore' },
    { img: shortsImage, text: 'Shorts' },
    { img: subscriptionImage, text: 'Subscription' }
  ];

  const libraryLinks = [
    { img: libraryImage, text: 'Library' },
    { img: historyImage, text: 'History' },
    { img: yourVideoImage, text: 'Your videos' },
    { img: watchLaterImage, text: 'Watch later' },
    { img: likedImage, text: 'Liked videos' },
  ];

  const userChannels = [
    { img: ellipse1Image, text: 'Nadir on the go' },
    { img: ellipse2Image, text: 'Coke studio' },
    { img: ellipse1Image, text: 'MKBHD' },
    { img: ellipse1Image, text: 'Figma' },
    { img: ellipse2Image, text: 'ATC Android' },
    { img: ellipse1Image, text: 'Alux.com' }
  ];

  return (
    <div className="color">
      <div className="yt">
        <div><img className="icon" src={hamburgerImage} alt="Hamburger Menu" /></div>
        <div><img className="icon" src={youtubeLogoImage} alt="YouTube Logo" style={{width: "100px"}} /></div>
      </div>


      <div className="left">
        {mainLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div className="image"><img src={link.img} alt={link.text} /></div>
            <div className="text"><h5>{link.text}</h5></div>
          </React.Fragment>
        ))}
      </div>
      

      <div className="left2">
        {libraryLinks.map((link, index) => (
          <React.Fragment key={index}>
            <div className="img1"><img src={link.img} alt={link.text} /></div>
            <div className="kaik"><h5>{link.text}</h5></div>
          </React.Fragment>
        ))}

        <div className="img2"><img className="show-more-icon" src={downArrowImage} alt="Show More" /></div>
        <div className="kaik"><h5 className="show-more-text">Show more</h5></div>

        {userChannels.map((channel, index) => (
          <React.Fragment key={index}>
            <div className="img11"><img src={channel.img} alt={channel.text} /></div>
            <div className="kaik1"><h5>{channel.text}</h5></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
