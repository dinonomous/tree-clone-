import React from "react";
import "../css/firstpage.css";
import Card from "./Card";
import { Tilt } from "react-tilt";

const PageOne = () => {
  const defaultOptions = {
    reverse: true, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <span className="firstPage">
      <div className="firstPageContent">
        <div className="firstPageContentText">
          <h1>Everything you are. In one, simple link in bio.</h1>
          <p>
            Join 50M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="claimyourlinktree">
            <form action="submit">
              <input type="text" placeholder="linktr.ee/yourself" />
              <button className="claimyourlinktree_btn btn">
                Claim your Linktree
              </button>
            </form>
          </div>
        </div>
        <div className="firstPageContentImage">
          <div className="content">
            <Card />
          </div>
        </div>
      </div>
    </span>
  );
};

export default PageOne;
