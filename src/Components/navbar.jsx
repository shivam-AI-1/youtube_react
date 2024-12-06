import React from "react";
import "../Components/navbar.css";


import createIcon from '../assets/create.png';
import moreIcon from '../assets/more.png';
import bellIcon from '../assets/bell.png';
import profileIcon from '../assets/Ellipse 1 (2).png';
import micIcon from '../assets/mic.png';
import searchIcon from '../assets/search.png';

const icons = [
    { src: createIcon, alt: "Create" },
    { src: moreIcon, alt: "More" },
    { src: bellIcon, alt: "Notifications" },
    { src: profileIcon, alt: "Profile" },

];

const tags = [
    "All",
    "Cook Studio",
    "UX",
    "Case",
    "Music",
    "Bangla lofi",
    "Tour",
    "Saintmartin",
    "Tech",
    "iPhone 13",
    "User Interface Design",
    "Computer",
];

const App = () => {
    return (
        <div className="container">

            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button>
                    <img src={searchIcon} alt="search" className="icon" />
                </button>
            </div>

            <div className="tag-container">
                {tags.map((tag, index) => (
                    <button key={index} className="tag">
                        {tag}
                    </button>
                ))}
            </div>


            <div className="icons">
                {icons.map((icon, index) => (
                    <img key={index} src={icon.src} alt={icon.alt} className="icon" />
                ))}
            </div>




        </div>
    );
};

export default App;
