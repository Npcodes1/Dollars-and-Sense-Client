import React from "react";

function ForgotLogin() {
  return (
    <div>
      <section class="section-container">
        <div class="content-wrapper">
          <h1 class="h1-title">HAVING TROUBLE SIGNING IN?</h1>
          <p class="contact-paragraph">
            To reset your password, please enter the email address associated
            with this account.
          </p>
        </div>

        {/* <!-- Message Form --> */}
        <form action="#">
          <div class="form-fields">
            {/* <!-- Email --> */}
            <div class="form-details">
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>

            {/* <!-- Remembered Login --> */}
            <div class="form-link">
              <span>
                Remembered your login?
                <a class="login" href="./login.html" rel="noopener noreferrer">
                  Login
                </a>
              </span>
            </div>

            {/* <!-- Submit Button --> */}
            <div class="form-submit">
              <button class="btn" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ForgotLogin;
