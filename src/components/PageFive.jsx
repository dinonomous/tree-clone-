import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "../css/firstpage.css";
import Page5flipcard from "./Page5flipcard";

gsap.registerPlugin(ScrollToPlugin);

const PageFive = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const scrollWidth = container.scrollWidth; // Total width to scroll

      // Define the number of steps and step width
      const numSteps = 10; // Number of scroll steps
      const stepWidth = scrollWidth / numSteps; // Width of each scroll step

      // Create a GSAP timeline
      const timeline = gsap.timeline({
        repeat: -1, // Repeat indefinitely
        ease: "none",
      });

      // Add scroll animations for each step
      for (let i = 0; i < numSteps; i++) {
        timeline.to(container, {
          scrollTo: { x: (i + 1) * stepWidth, autoKill: false },
          duration: 3, // Duration for each scroll step
        });
      }

      // Optionally add a pause between scroll steps
      timeline.to(container, {
        scrollTo: { x: stepWidth * numSteps, autoKill: false },
        duration: 0, // No duration for the pause
        delay: 0, // Delay before restarting the loop
      });
    }
  }, []);

  return (
    <span className="pageFive">
      <div className="pageFiveText">
        <h2>The only link in bio trusted by 50M+</h2>
        <div className="text">
          <span className="word">
            <h2>Content goes here</h2>
          </span>
        </div>
      </div>
      <div className="pagefiveScroller">
        <div className="page5card" ref={containerRef}>
          <Page5flipcard
            frontImage="https://picsum.photos/id/237/200/300"
            backText="This is the back side."
            backColor="#f0f0f0"
            width="500px"
            borderrad="2rem"
          />
        </div>
      </div>
    </span>
  );
};

export default PageFive;
