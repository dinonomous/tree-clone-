import React, { Children } from "react";
import "../css/format.css";
import logo from "../assets/logo.svg";
import "../assets/linik-sans-cufonfonts-webfont/style.css";

const format = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <span>
          <div className="navbarleftcontent">
            <ul className="navbarleftcontent_ul">
              <li className="navlogo">
                <img src={logo} alt="" />
              </li>
              <li>
                <p>Templates</p>
              </li>
              <li>
                <p>Marketplaces</p>
              </li>
              <li>
                <p>Discover</p>
              </li>
              <li>
                <p>Pricing</p>
              </li>
              <li>
                <p>Learn</p>
              </li>
            </ul>
          </div>
          <div className="authdiv">
            <button className="login btn">Log in</button>
            <button className="signup btn">Sign up free</button>
          </div>
        </span>
      </nav>
      <main>
        {children}
      </main>
      <footer>
        <span className="footerHedding">
          <div className="footerHeaddingText">
            <h2>Jumpstart your corner of the internet today</h2>
          </div>
          <div className="claimyourlinktree">
            <form action="submit">
              <input type="text" placeholder="linktr.ee/yourself" />
              <button className="claimyourlinktree_btn btn">
                Claim your Linktree
              </button>
            </form>
          </div>
        </span>
        <span className="fotterlist">
          <div className="footerlistContent">
            <div className="col">
              <ul>
                <li>
                  <h4>Company</h4>
                </li>
                <li>
                  <p>The Linktree Blog</p>
                </li>
                <li>
                  <p>Engineering Blog</p>
                </li>
                <li>
                  <p>Marketplace</p>
                </li>
                <li>
                  <p>What's New</p>
                </li>
                <li>
                  <p>About</p>
                </li>

                <li>
                  <p>Press</p>
                </li>
                <li>
                  <p>Careers</p>
                </li>
                <li>
                  <p>Link in Bio</p>
                </li>
                <li>
                  <p>Social Good</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <h4>Company</h4>
                </li>
                <li>
                  <p>The Linktree Blog</p>
                </li>
                <li>
                  <p>Engineering Blog</p>
                </li>
                <li>
                  <p>Marketplace</p>
                </li>
                <li>
                  <p>What's New</p>
                </li>
                <li>
                  <p>About</p>
                </li>
                <li>
                  <p>What's New</p>
                </li>
                <li>
                  <p>About</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <h4>Company</h4>
                </li>
                <li>
                  <p>The Linktree Blog</p>
                </li>
                <li>
                  <p>Engineering Blog</p>
                </li>
                <li>
                  <p>Marketplace</p>
                </li>
                <li>
                  <p>What's New</p>
                </li>
                <li>
                  <p>Marketplace</p>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <h4>Company</h4>
                </li>
                <li>
                  <p>The Linktree Blog</p>
                </li>
                <li>
                  <p>Engineering Blog</p>
                </li>
                <li>
                  <p>Marketplace</p>
                </li>
                <li>
                  <p>What's New</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="fotterlistContactup">
            <div className="fotterlistContactupLogin">
              <button className="login btn">Log in</button>
              <button className="signup btn">Get started for free</button>
            </div>
            <div className="fotterlistContactupSocialMedia">
              <a
                href="https://www.kobinet.com.tr/"
                target="_blank"
                class="market-btn apple-btn"
                role="button"
              >
                <span class="market-button-subtitle">Download on the</span>
                <span class="market-button-title">App Store</span>
              </a>

              <a
                href="https://www.kobinet.com.tr/"
                target="_blank"
                class="market-btn google-btn"
                role="button"
              >
                <span class="market-button-subtitle">Download on the</span>
                <span class="market-button-title">Google Play</span>
              </a>
              <button className="btn_round"></button>
              <button className="btn_round"></button>
              <button className="btn_round"></button>
              <button className="btn_round"></button>
            </div>
          </div>
        </span>
        <span className="LinktreeBanner">
          <h5>
            Linktree
          </h5>
          <img src={logo} alt="" />
        </span>
        <span className="footerText">
          <p>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066</p>
        </span>
      </footer>
    </>
  );
};

export default format;
