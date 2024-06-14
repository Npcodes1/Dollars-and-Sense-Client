import React from "react";

function Signup({ user, setUser }) {
  return (
    <div>
      {/* Sign Up Form */}
      <section className="section-container">
        <div className="content-wrapper">
          <h2 className="h2-title">SIGN UP</h2>
        </div>

        {/* Message Form */}
        <form>
          <div className="form-fields">
            {/* First Name */}
            <div className="form-details">
              <label htmlFor="first-name">First Name:</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                required
              />
            </div>

            {/* Last Name */}
            <div className="form-details">
              <label htmlFor="last-name">Last Name:</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                required
              />
            </div>

            {/* Email */}
            <div className="form-details">
              <label htmlFor="last-name">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="form-details">
              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="number"
                name="phone-number"
                id="phone-number"
                placeholder="Phone Number"
                required
              />
            </div>

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
