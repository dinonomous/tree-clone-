import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import col1card1front from "../assets/col1card1front.svg";
import col1card1back from "../assets/col1card1back.svg";
import col1card2front from "../assets/col1card2front.svg";
import col1card2back from "../assets/col1card2Back.svg";

const Widgetcardflip = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const front = card.querySelector(".flipcardFront");
      const back = card.querySelector(".flipcardBack");

      gsap.set(card, {
        transformStyle: "preserve-3d",
        perspective: 10000,
      });

      gsap.set(back, { rotationY: -180 });

      const tl = gsap.timeline({ paused: true })
        .to(front, { duration: 1, rotationY: 180 })
        .to(back, { duration: 1, rotationY: 0 }, 0)
        .to(card, { z: 0 }, 0)
        .to(card, { z: 0 }, 0);

      card.addEventListener("mouseenter", () => tl.play());
      card.addEventListener("mouseleave", () => tl.reverse());
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (!card) return;

        card.removeEventListener("mouseenter", () => tl.play());
        card.removeEventListener("mouseleave", () => tl.reverse());
      });
    };
  }, []);

  return (
    <div className="WidgetCardFlipParent">
      <div className="matrics">
        <div className="row row1">
          <div
            className="cardCont wideCard"
            ref={(el) => (cardRefs.current[0] = el)}
          >
            <div className="flipcardFront flipcard">
              <img src={col1card1front} alt="Front 1" />
            </div>
            <div className="flipcardBack flipcard">
              <img src={col1card1back} alt="Back 1" />
            </div>
          </div>
          <div
            className="cardCont smallCard"
            ref={(el) => (cardRefs.current[1] = el)}
          >
            <div className="flipcardFront flipcard">
              <img src={col1card2front} alt="Front 2" />
            </div>
            <div className="flipcardBack flipcard">
              <img src={col1card2back} alt="Back 2" />
            </div>
          </div>
        </div>
        <div className="row">
        <div
            className="cardCont smallCard"
            ref={(el) => (cardRefs.current[2] = el)}
          >
            <div className="flipcardFront flipcard">
              <img src={col1card2front} alt="Front 3" />
            </div>
            <div className="flipcardBack flipcard">
              <img src={col1card2back} alt="Back 3" />
            </div>
          </div>
          <div
            className="cardCont wideCard"
            ref={(el) => (cardRefs.current[3] = el)}
          >
            <div className="flipcardFront flipcard">
              <img src={col1card1front} alt="Front 3" />
            </div>
            <div className="flipcardBack flipcard">
              <img src={col1card1back} alt="Back 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widgetcardflip;
