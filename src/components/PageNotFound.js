import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages.css";
import "../MediaQueries.css";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleErrorRedirect = () => {
    navigate("/");
  };

  return (
    <>
      <section className="section-container">
        <div className="content-wrapper">
          <h1 className="page-error">
            Oh no! Page Could Not Be Found. Please Try Again Later.
          </h1>
          <img
            className="page-error-img"
            src="./img/page-not-found.jpg"
            alt="Sad puppy with a error requesting page method."
          />
          <div className="page-error-btn">
            <button className="btn" onClick={handleErrorRedirect}>
              Return Home
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
