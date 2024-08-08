import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import "../css/firstpage.css";

const words = ["DJs.", "creators.", "musicians.", "artists.", "writers.", "photographers.", "designers."];

const PageFive = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const wordRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Slide out the current word
      gsap.to(wordRef.current, {
        y: 10, // Slide out to bottom
        opacity: 0,
        duration: 0.1,
        onComplete: () => {
          // Change the word after the slide-out animation
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );

          // Slide in the new word from the top
          gsap.fromTo(
            wordRef.current,
            { y: -10, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 }
          );
        },
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="pageFive">
      <div className="pageFiveText">
        <h2>The only link in bio trusted by 50M+</h2>
        <div className="text">
          <span className="word" ref={wordRef}>
            <h2>{words[currentWordIndex]}</h2>
          </span>
        </div>
      </div>
      <div className="pagefiveScroller">
        <div className="page5card">
            
        </div>
      </div>
    </span>
  );
};

export default PageFive;
