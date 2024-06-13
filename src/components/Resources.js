import React from "react";

function Resources() {
  return (
    <div>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h1 className="h1-title">RESOURCES</h1>
            {/* Down payment Assistance */}
            <h2 className="h2-centered">Down Payment Assistance</h2>
            <div className="resource-link">
              <a href="https://www.naca.com/purchase/" target="_blank">
                NACA
              </a>
            </div>
            <div className="resource-link">
              <a
                href="https://www.forbes.com/advisor/mortgages/down-payment-assistance-by-state/"
                target="_blank"
              >
                Down Payment Assistance by State
              </a>
            </div>
            <div className="resource-link">
              <a
                href="https://www.cnbc.com/2022/09/01/bank-of-america-to-help-minorities-buy-first-homes-with-new-mortgages.html"
                target="_blank"
              >
                Bank of America to Help Minorities Buy First Homes with New
                Mortgages
              </a>
            </div>

            {/* Loan Programs */}
            <h2 className="h2-centered">Loan Programs</h2>
            <div className="resource-link">
              <a
                href="https://www.zillow.com/learn/first-time-buyer-loan-programs/"
                target="_blank"
              >
                First Time Buyer Loan Programs
              </a>
            </div>
            <div className="resource-link">
              <a
                href="https://www.homelight.com/blog/buyer-home-loan-programs-minorities-low-income/"
                target="_blank"
              >
                16 Loan Programs for Low-income and Minority Home-buyers
              </a>
            </div>

            {/* Grant Programs */}
            <h2 className="h2-centered">Grant Programs</h2>
            <div className="resource-link">
              <a
                href="https://homebuyer.com/learn/first-time-home-buyer-grants-programs"
                target="_blank"
              >
                First Time Buyer Grant Programs
              </a>
            </div>
            <div className="resource-link">
              <a
                href="https://www.bankofamerica.com/mortgage/affordable-housing-programs/"
                target="_blank"
              >
                Affordable Housing Programs
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Resources;
