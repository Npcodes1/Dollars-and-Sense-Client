import React from "react";

function Contact() {
  return (
    <div>
      <section class="section-container">
        <div class="content-wrapper">
          <h2 class="h2-title">GET IN TOUCH</h2>
          <p>
            For any questions, comments, or concerns, please don't hesitate to
            reach out! I'd love to hear from you and I'll respond as soon as I
            can. Thank you!
          </p>
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

            {/* <!-- Message Box --> */}
            <div class="form-details">
              <label for="message">Message: </label>
              <textarea
                name="message"
                id="message"
                cols="40"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>

            {/* <!-- Submit Button --> */}
            <div class="form-submit">
              <button class="btn" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Contact;
