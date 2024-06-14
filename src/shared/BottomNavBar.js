import React from "react";
import { Link } from "react-router-dom";

function BottomNavBar() {
  return (
    <div>
      {/* Bottom Navigation Bar */}
      <header className="bottom-header">
        <nav className="navbar-bottom">
          <Link to="/" className="nav-links-bottom">
            <i className="fa-solid fa-house"></i>
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/tracker" className="nav-links-bottom">
            <i className="fa-solid fa-coins"></i>
            <span className="nav-text">Financial Tracker</span>
          </Link>
          <Link to="/credit-score" className="nav-links-bottom">
            <i className="fa-solid fa-building-columns"></i>
            <span className="nav-text">Credit Score</span>
          </Link>
          <Link to="/resources" className="nav-links-bottom">
            <i className="fa-solid fa-book"></i>
            <span className="nav-text">Resources</span>
          </Link>
          <Link to="/profile" className="nav-links-bottom">
            <i className="fa-solid fa-user"></i>
            <span className="nav-text">Profile</span>
          </Link>
        </nav>
      </header>
    </div>
  );
}

export default BottomNavBar;
