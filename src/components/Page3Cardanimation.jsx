import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import '../css/page3cards.css';

const Page3Cardanimation = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.set(cardsRef.current, { 
      position: "absolute", 
      left: "50%", 
      top: "10%", 
      xPercent: -50, 
      yPercent: -10 
    });

    gsap.set(cardsRef.current, {
      y: (index) => index * 70,  // Raise each card by 20px
      x: (index) => -index * 50,  // Move each card back by 10px
      marginBottom: 30,
    });


  }, []);

  return (
    <span className="Page3CardanimationParent">
        <div className="linktreesubsection"></div>
      <div className="minicards" ref={(el) => (cardsRef.current[0] = el)}>
        <div className="profilephoto"></div>
      </div>
      <div className="minicards" ref={(el) => (cardsRef.current[1] = el)}>
        <div className="profilephoto"></div>
      </div>
      <div className="minicards" ref={(el) => (cardsRef.current[2] = el)}>
        <div className="profilephoto"></div>
      </div>
      <div className="minicards" ref={(el) => (cardsRef.current[3] = el)}>
        <div className="profilephoto"></div>
      </div>
    </span>
  );
};

export default Page3Cardanimation;

