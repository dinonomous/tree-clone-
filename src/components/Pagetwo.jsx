import React from 'react'
import Card from "./Card";
import "../css/firstpage.css";
const Pagetwo = () => {
  return (
    <span className='secondPage'>
        <div className="secondPageContent">
        <div className="secondPageContentImage">
          <div className="content">
            <Card />
          </div>
        </div>
        <div className="secondPageContentText">
          <h2>Create and customize your Linktree in minutes</h2>
          <p>
          Connect your TikTok, Instagram, Twitter, website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.
          </p>
          <div className="claimyourlinktree">
            <form action="submit">
            <button className="signup btn">Get started for free</button>
            </form>
          </div>
        </div>
      </div>
    </span>
  )
}

export default Pagetwo