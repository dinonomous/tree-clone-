import React from 'react'
import "../css/firstpage.css";
import Widgetcardflip from './Widgetcardflip.jsx';

const PageThree = () => {
  return (
    <span className='thirdPage'>
        <div className="thirdPageContent">
        <div className="thirdPageContentImage">
          <div className="content">
            <Widgetcardflip />
          </div>
        </div>
        <div className="thirdPageContentText">
          <h2>Analyze your audience and keep your followers engaged</h2>
          <p>
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="claimyourlinktree">
          <button className="signup btn">Get started for free</button>
          </div>
        </div>
      </div>
    </span>
  )
}

export default PageThree