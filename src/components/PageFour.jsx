import React from 'react'
import "../css/firstpage.css";
import Page3Cardanimation from './Page3Cardanimation'
import Card from "./Card";
import { Tilt } from "react-tilt";

const PageFour = () => {
  return (
    <span className="fourthPage">
      <div className="fourthPageContent">
        <div className="fourthPageContentText">
          <h2>Share your Linktree from your Instagram, TikTok, Twitter and other bios</h2>
          <p>
          Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic online.
          </p>
          <div className="claimyourlinktree">
          <button className="signup btn">Get started for free</button>
          </div>
        </div>
        <div className="fourthPageContentImage">
          <div className="content">
            <Page3Cardanimation />
          </div>
        </div>
      </div>
    </span>
  )
}

export default PageFour