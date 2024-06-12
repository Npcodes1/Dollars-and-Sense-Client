import React from "react";

function Login() {
  return (
    <div>
      <section class="section-container">
        <div class="content-wrapper">
          <h2 class="h2-title">LOGIN</h2>
        </div>

        {/* <!-- Login Form --> */}
        <form action="#" method="post">
          <div class="form-fields">
            {/* <!-- Username --> */}
            <div class="form-details">
              <label for="user-name">Username:</label>
              <input
                type="text"
                name="user-name"
                id="user-name"
                placeholder="Username"
                required
              />
            </div>

            {/* <!-- Password --> */}
            <div class="form-details">
              <label for="password">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>

            {/* <!-- Submit Button --> */}
            <div class="form-submit">
              <button class="btn" type="submit">
                Login
              </button>
            </div>

            {/* <!-- Forgot Username/Password --> */}
            <div class="form-link">
              <span>
                Already have an account but can't login?
                <a class="forgot-login" href="./forgot-login.html">
                  Forgot Username/Password
                </a>
              </span>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;
