import React from "react";
import BottomNavBar from "./BottomNavBar";

function Header() {
  return (
    <div>
      <header className="top-header">
        <div className="logo-container">
          <a href="./index.html">
            <img
              src="./public/images/DOLLAR$ & $EN$E LOGO.png"
              alt="site-logo"
            />
          </a>
        </div>
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <a href="./index.html">HOME</a>
            </li>
            <li>
              <a href="./financial-tracker.html">FINANCIAL TRACKER</a>
            </li>
            <li>
              <a href="./credit-score.html">CREDIT SCORE</a>
            </li>
            <li>
              <a href="./resources.html">RESOURCES</a>
            </li>
            <li>
              <a href="./contact.html">CONTACT</a>
            </li>
            <li>
              <a href="./login.html">PROFILE</a>
            </li>
          </ul>
        </nav>
      </header>

      <BottomNavBar />

      {/* Wave svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 250">
        <path
          fill="#023b58"
          fill-opacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,69.3C640,96,800,160,960,181.3C1120,203,1280,181,1360,170.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Header;
