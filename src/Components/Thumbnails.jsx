import React from "react";
import "../Components/Thumbnails.css";
import image1 from "../assets/Thumbnail-1.png";
import image2 from "../assets/Thumbnail-2.png";
import image3 from "../assets/Thumbnail-3.png";
import image4 from "../assets/Thumbnail-4.png";
import image5 from "../assets/Thumbnail-5.png";
import image6 from "../assets/Thumbnail-6.png";
import image7 from "../assets/Thumbnail-7.png";
import image8 from "../assets/Thumbnail-8.png";

const thumbnails = [
  {
    title: "Bulbuli | Coke Studio Bangla Season One",
    image: image1,
    views: "1.5M views",
    time: "2 days ago",
  },
  {
    title: "Infinix Note 12: Unboxing AMOLED Helio G88 Soc!",
    image: image2,
    views: "4.2M views",
    time: "2 days ago",
  },
  {
    title: "My first UX Design case study - This got me my first job",
    image: image3,
    views: "4.8K views",
    time: "1 year ago",
  },
  {
    title: "My Mix",
    image: image4,
    views: "Personalized",
    time: "",
  },
  {
    title: "UX Design - What is it? (From AJ & Smart)",
    image: image5,
    views: "150K views",
    time: "3 years ago",
  },
  {
    title: "Mix - Mombati | Mohon Sharif | Dhakaiya Dose",
    image: image6,
    views: "Popular",
    time: "",
  },
  {
    title: "48 VISA-FREE WITH Danishbhai | Coke Studio Bangla",
    image: image7,
    views: "1.5M views",
    time: "2 days ago",
  },
  {
    title: "14x Your Design Speed with Figma",
    image: image8,
    views: "500K views",
    time: "1 month ago",
  },
  {
    title: "14x Your Design Speed with Figma",
    image: image8,
    views: "500K views",
    time: "1 month ago",
  },
  {
    title: "14x Your Design Speed with Figma",
    image: image8,
    views: "500K views",
    time: "1 month ago",
  },
  {
    title: "14x Your Design Speed with Figma",
    image: image8,
    views: "500K views",
    time: "1 month ago",
  },
  {
    title: "14x Your Design Speed with Figma",
    image: image8,
    views: "500K views",
    time: "1 month ago",
  },
];

const VideoGrid = () => {
  return (
    <div className="video-grid">
      {thumbnails.map((thumbnail, index) => (
        <div className="video-card" key={index}>
          <img
            src={thumbnail.image}
            alt={thumbnail.title}
            className="video-thumbnail"
          />
          <div className="video-info">
            <h4 className="video-title">{thumbnail.title}</h4>
            <p className="video-meta">
              {thumbnail.views} • {thumbnail.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;