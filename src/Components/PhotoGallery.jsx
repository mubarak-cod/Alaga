import React from "react";
import "./PhotoGallery.css";

import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/about.jpg";
import gallery7 from "../assets/gallery7.jpg";
import gallery8 from "../assets/gallery8.jpg";
const images = [
  { src: gallery1, title: "Traditional Moments" },
  { src: gallery2, title: "Bridal Elegance" },
  { src: gallery3, title: "Cultural Display" },
  { src: gallery4, title: "Family Celebration" },
  { src: gallery5, title: "The Ceremony" },
  { src: gallery6, title: "Reception Vibes" },
  { src: gallery7, title: "Reception Vibes" },
   { src: gallery8, title: "Reception Vibes" },
];

const PhotoGallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-card">
            <img src={image.src} alt={image.title} className="gallery-img" />
            <div className="overlay">
              <p className="image-title">{image.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
