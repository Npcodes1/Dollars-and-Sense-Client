import React from "react";

function Signup() {
  return (
    <div>
      <section class="section-container">
        <div class="content-wrapper">
          <h2 class="h2-title">SIGN UP</h2>
        </div>

        {/* <!-- Message Form --> */}
        <form action="#" method="post">
          <div class="form-fields">
            {/* <!-- First Name --> */}
            <div class="form-details">
              <label for="first-name">First Name:</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                required
              />
            </div>

            {/* <!-- Last Name --> */}
            <div class="form-details">
              <label for="last-name">Last Name:</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </div>

            {/* <!-- Email --> */}
            <div class="form-details">
              <label for="last-name">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>

            {/* <!-- Phone Number --> */}
            <div class="form-details">
              <label for="phone-number">Phone Number:</label>
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                placeholder="Phone Number"
                required
              />
            </div>

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
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Signup;
