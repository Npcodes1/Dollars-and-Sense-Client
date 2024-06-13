import React from "react";

function BottomNavBar() {
  return (
    <div>
      {/* Bottom Navigation Bar */}
      <header className="bottom-header">
        <nav className="navbar-bottom">
          <a href="./index.html" className="nav-links-bottom">
            <i className="fa-solid fa-house"></i>
            <span className="nav-text">Home</span>
          </a>
          <a href="./financial-tracker.html" className="nav-links-bottom">
            <i className="fa-solid fa-coins"></i>
            <span className="nav-text">Financial Tracker</span>
          </a>
          <a href="./credit-score.html" className="nav-links-bottom">
            <i className="fa-solid fa-building-columns"></i>
            <span className="nav-text">Credit Score</span>
          </a>
          <a href="./resources.html" className="nav-links-bottom">
            <i className="fa-solid fa-book"></i>
            <span className="nav-text">Resources</span>
          </a>
          <a href="./login.html" className="nav-links-bottom">
            <i className="fa-solid fa-user"></i>
            <span className="nav-text">Profile</span>
          </a>
        </nav>
      </header>
    </div>
  );
}

export default BottomNavBar;
