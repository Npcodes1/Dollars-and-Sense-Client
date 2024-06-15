import React from "react";
import "../Pages.css";
import "../MediaQueries.css";

function Login({ user, setUser }) {
  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h2 className="h2-title">LOGIN</h2>
          </div>

          {/* Login Form */}
          <form action="#" method="post">
            <div className="form-fields">
              {/* Username */}
              <div className="form-details">
                <label htmlFor="user-name">Username:</label>
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  placeholder="Username"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-details">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>

              {/* Forgot Username/Password */}
              <div className="form-link">
                <span>
                  Already have an account but can't login?
                  <a className="forgot-login" href="./forgot-login.html">
                    Forgot Username/Password
                  </a>
                </span>
              </div>
              {/* Admin Users Redirect */}
              <div className="form-link">
                <span>
                  Are you an Admin?
                  <a className="forgot-login" href="./forgot-login.html">
                    Forgot Username/Password
                  </a>
                </span>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
