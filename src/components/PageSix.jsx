import React from 'react'
import "../css/firstpage.css";
import rightimg from '../assets/forrightcard.png'

const PageSix = () => {
  return (
    <span className="pageSix">
      <div className="pageSixParent">
        <div className="pagesixLeft">
          <div className="pagesixContainerLeft">
            <a href="">Grow, own and engage your audience by unifying them in one place.</a>
          </div>
          <div className="pagesixContainerLeft">
            <a href="">Grow, own and engage your audience by unifying them in one place.</a>
          </div>
        </div>
        <div className="pagesixRight">
          <img src={rightimg} alt="" />
          <a href="">Grow, own and engage your audience by unifying them in one place.</a>
        </div>
      </div>
    </span>
  )
}

export default PageSix