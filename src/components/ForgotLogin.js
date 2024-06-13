import React from "react";

function ForgotLogin() {
  return (
    <div>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">HAVING TROUBLE SIGNING IN?</h1>
            <p className="contact-paragraph">
              To reset your password, please enter the email address associated
              with this account.
            </p>
          </div>

          {/* Message Form */}
          <form>
            <div className="form-fields">
              {/* Email */}
              <div className="form-details">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Remembered Login */}
              <div className="form-link">
                <span>
                  Remembered your login?
                  <a className="login" href="./login.html">
                    Login
                  </a>
                </span>
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button className="btn" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default ForgotLogin;
