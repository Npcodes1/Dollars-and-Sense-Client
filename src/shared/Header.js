function Header() {
  return (
    <header class="top-header">
      <div class="logo-container">
        <a href="./index.html">
          <img src="./public/images/DOLLAR$ & $EN$E LOGO.png" alt="site-logo" />
        </a>
      </div>
      <nav class="navbar">
        <ul class="nav-links">
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
  );
}

export default Header;
