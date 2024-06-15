import React from "react";
import { useNavigate } from "react-router-dom";
import "../Pages.css";
import "../MediaQueries.css";

function PageNotFound() {
  const navigate = useNavigate();

  const handleErrorRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Oh no! Page Not Found. Please Try Again Later.</h1>
      <img
        src="./img/page-not-found.jpg"
        alt="Sad puppy with a error requesting page method."
        width={600}
      />
      <button onClick={handleErrorRedirect}>Return Home</button>
    </div>
  );
}

export default PageNotFound;
