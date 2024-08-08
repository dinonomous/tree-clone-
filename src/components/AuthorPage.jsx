import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const AuthorPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);

  const content = [
    {
      image: "https://linktr.ee/_gatsby/image/87b2d808b1cad9718a50030b99f42f24/15a186931b23468dd8dc151e0365c9e6/Testimonial-Riley-Lemon.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FTestimonial-Riley-Lemon.png&a=w%3D1280%26h%3D647%26fm%3Davif%26q%3D75&cd=19c8b60448bc7b7349de62508f52e3a1",
      text: "\"Linktree simplifies the process for creators to share multiple parts of their digital presence.\"",
    },
    {
      image: "https://linktr.ee/_gatsby/image/9aedb20cf465e4bab2c7d464423677c4/15a186931b23468dd8dc151e0365c9e6/Testimonial-Patti-Chimkire-New.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FTestimonial-Patti-Chimkire-New.png&a=w%3D1280%26h%3D647%26fm%3Davif%26q%3D75&cd=77d4e023baa1fa18926d125f15865456",
      text: "\"Linktree helps my customers get where they need to go. It's so fast and easy.\"",
    },
    {
      image: "https://linktr.ee/_gatsby/image/537602862cc1ba2a5ab85af4b58e6d1e/15a186931b23468dd8dc151e0365c9e6/Testimonial-Luke-Kidgell2.avif?u=https%3A%2F%2Fapi.blog.production.linktr.ee%2Fwp-content%2Fuploads%2F2022%2F06%2FTestimonial-Luke-Kidgell2.png&a=w%3D1280%26h%3D647%26fm%3Davif%26q%3D75&cd=789e1ffec359f0da2e65fc78787f2e5f",
      text: "\"l use Linktree's analytics to better understand my audience and what converts them\"",
    },
  ];

  const slideContent = (direction) => {
    const newIndex = direction === "right" 
      ? (activeIndex + 1) % content.length 
      : (activeIndex - 1 + content.length) % content.length;

    // Slide out the current content
    gsap.to(contentRef.current, {
      x: direction === "right" ? "-100%" : "100%",
      duration: 0.5,
      onComplete: () => {
        // Update the index to show the new content
        setActiveIndex(newIndex);

        // Immediately position the new content on the opposite side
        gsap.set(contentRef.current, {
          x: direction === "right" ? "100%" : "-100%"
        });

        // Slide in the new content
        gsap.to(contentRef.current, {
          x: "0%",
          duration: 0.5
        });
      }
    });
};


  return (
    <div className="slider-container">
      <div className="slider-content" ref={contentRef}>
        <img src={content[activeIndex].image} alt="slider" className="slider-image" />
        <h2>{content[activeIndex].text}</h2>
        <div className="slider-buttons">
        <button onClick={() => slideContent("left")}>
  <i className="fas fa-arrow-left"></i>
</button>
<button onClick={() => slideContent("right")}>
  <i className="fas fa-arrow-right"></i>
</button>
      </div>
      </div>
    </div>
  );
};

export default AuthorPage;
