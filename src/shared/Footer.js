import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <section class="footer-container">
          <div class="social-media">
            <a href="./contact.html">
              <h2 class="footer-h2-title">LET'S CONNECT!</h2>
            </a>
            <ul class="footer-links">
              <li>
                <a href="https://github.com/Npcodes1" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nicolepayneswe/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:nicole1rock@gmail.com">
                  <i class="fa-solid fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="back-to-top">
            <a href="#">
              <i class="fa-solid fa-circle-arrow-up"></i>
            </a>
          </div>
          <div class="copyright-wrapper">
            <span id="copyright"></span>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
