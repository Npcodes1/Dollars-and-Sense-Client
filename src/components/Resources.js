import React from "react";

function Resources() {
  return (
    <div>
      <section class="section-container">
        <div class="content-wrapper">
          <h1 class="h1-title">RESOURCES</h1>
          {/* <!-- Down payment Assistance --> */}
          <h2 class="h2-centered">Down Payment Assistance</h2>
          <div class="resource-link">
            <a href="https://www.naca.com/purchase/" target="_blank">
              NACA
            </a>
          </div>
          <div class="resource-link">
            <a
              href="https://www.forbes.com/advisor/mortgages/down-payment-assistance-by-state/"
              target="_blank"
            >
              Down Payment Assistance by State
            </a>
          </div>
          <div class="resource-link">
            <a
              href="https://www.cnbc.com/2022/09/01/bank-of-america-to-help-minorities-buy-first-homes-with-new-mortgages.html"
              target="_blank"
            >
              Bank of America to Help Minorities Buy First Homes with New
              Mortgages
            </a>
          </div>

          {/* <!-- Loan Programs --> */}
          <h2 class="h2-centered">Loan Programs</h2>
          <div class="resource-link">
            <a
              href="https://www.zillow.com/learn/first-time-buyer-loan-programs/"
              target="_blank"
            >
              First Time Buyer Loan Programs
            </a>
          </div>
          <div class="resource-link">
            <a
              href="https://www.homelight.com/blog/buyer-home-loan-programs-minorities-low-income/"
              target="_blank"
            >
              16 Loan Programs for Low-income and Minority Home-buyers
            </a>
          </div>

          {/* <!-- Grant Programs --> */}
          <h2 class="h2-centered">Grant Programs</h2>
          <div class="resource-link">
            <a
              href="https://homebuyer.com/learn/first-time-home-buyer-grants-programs"
              target="_blank"
            >
              First Time Buyer Grant Programs
            </a>
          </div>
          <div class="resource-link">
            <a
              href="https://www.bankofamerica.com/mortgage/affordable-housing-programs/"
              target="_blank"
            >
              Affordable Housing Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
