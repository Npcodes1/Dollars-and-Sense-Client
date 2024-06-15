import React from "react";
import { Link } from "react-router-dom";
import "../Footer.css";
import "../MediaQueries.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faLinkedin }

function Footer() {
  // To add current year to copyright
  let currentYear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <section className="footer-container">
          <div className="social-media">
            {/* Links to Contact Page */}
            <Link to="/contact">
              <h2 className="footer-h2-title">LET'S CONNECT!</h2>
            </Link>
            <ul className="footer-links">
              {/* GitHub */}
              <li>
                <Link
                  to="https://github.com/Npcodes1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <i className="fa-brands fa-github"></i> */}
                  {/* <FontAwesomeIcon icon={faGithub} /> */}
                </Link>
              </li>

              {/* LinkedIn */}
              <li>
                <Link
                  to="https://www.linkedin.com/in/nicolepayneswe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* <i className="fa-brands fa-linkedin"></i> */}
                  {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                </Link>
              </li>

              {/* Email */}
              <li>
                <Link to="mailto:nicole1rock@gmail.com">
                  {/* <i className="fa-solid fa-envelope"></i> */}
                </Link>
              </li>
            </ul>
          </div>

          {/* Back to the Top Feature */}
          <div className="back-to-top">
            <Link to="/">
              {/* <i className="fa-solid fa-circle-arrow-up"></i> */}
            </Link>
          </div>

          {/* Copyright */}
          <div className="copyright-wrapper">
            <span>
              Copyright &copy; Nicole Payne {currentYear}. All Rights Reserved.
            </span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
