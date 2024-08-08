import React from "react";
import Tilt from "react-parallax-tilt";
import "../css/card.css";

const Card = () => {
  return (
    <Tilt
      style={{
        width: "100%",
        height: "100%"
      }}
      perspective={500}
      tiltReverse={true}
    >
      <div className="titlecardContainer">
        <div className="tiltCard">
          <div className="titlecardUserinfo">
            <div className="profilephoto"></div>
            <div className="username">LGBTQ+ safe comunity</div>
            <div className="username">LGBTQ+ safe comunity</div>
          </div>
          <div className="titlecardSubcolums">
            <div className="columns">Lorem, ipsum dolor.</div>
            <div className="columns">Lorem, ipsum dolor.</div>
            <div className="columns">Lorem, ipsum dolor.</div>
          </div>
        </div>
        <div className="leftSubsection"></div>
      </div>
      
    </Tilt>
  );
};

export default Card;
