import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <section className="footer-container">
          <div className="social-media">
            <a href="./contact.html">
              <h2 className="footer-h2-title">LET'S CONNECT!</h2>
            </a>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/Npcodes1" target="_blank">
                  {/* <i className="fa-brands fa-github"></i> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nicolepayneswe/"
                  target="_blank"
                >
                  {/* <i className="fa-brands fa-linkedin"></i> */}
                </a>
              </li>
              <li>
                <a href="mailto:nicole1rock@gmail.com">
                  {/* <i className="fa-solid fa-envelope"></i> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="back-to-top">
            <a href="#">
              {/* <i className="fa-solid fa-circle-arrow-up"></i> */}
            </a>
          </div>
          <div className="copyright-wrapper">
            <span id="copyright"></span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
