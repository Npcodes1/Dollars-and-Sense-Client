import React from "react";
import { useNavigate, Link } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";

const url = "http://localhost:8080";

function Header({ user, setUser }) {
  //to navigate
  const navigate = useNavigate();

  //to handle logout
  const handleLogout = () => {
    fetch(`${url}/logout`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); //print success message
        setUser({}); //set user state to empty object
        localStorage.removeItem("user"); //remove user from localStorage
        navigate("/"); //navigate back to home
      })
      .catch((error) => {
        console.log(error); //print error message
        navigate("/"); //navigate back to home
      });
  };
  return (
    <div>
      <header className="top-header">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/">
            <img
              src="./public/images/DOLLAR$ & $EN$E LOGO.png"
              alt="site-logo"
            />
          </Link>
        </div>

        {/* Navbar */}
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/tracker">FINANCIAL TRACKER</Link>
            </li>
            <li>
              <Link to="/credit-score">CREDIT SCORE</Link>
            </li>
            <li>
              <Link to="/resources">RESOURCES</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              {user.username ? (
                <div>
                  <Link to="/admin">ADMIN</Link>

                  <a href="/" onClick={handleLogout}>
                    LOGOUT
                  </a>
                </div>
              ) : (
                <Link to="/profile">PROFILE</Link>
              )}
            </li>
          </ul>
        </nav>
      </header>

      {/* Bottom Navbar- for mobile and tablet devices only */}
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
