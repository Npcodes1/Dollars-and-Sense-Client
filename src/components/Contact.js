import React from "react";

function Contact() {
  return (
    <div>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h2 className="h2-title">GET IN TOUCH</h2>
            <p>
              For any questions, comments, or concerns, please don't hesitate to
              reach out! I'd love to hear from you and I'll respond as soon as I
              can. Thank you!
            </p>
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

              {/* Message Box */}
              <div className="form-details">
                <label htmlFor="message">Message: </label>
                <textarea
                  name="message"
                  id="message"
                  cols="40"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button className="btn" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Contact;
