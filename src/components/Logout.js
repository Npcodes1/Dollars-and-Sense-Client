import React from "react";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080";

const Logout = () => {
  //   to navigate
  const navigate = useNavigate();

  //   to handle logout
  const handleLogout = ({ user, setUser }) => {
    fetch(`${url}/logout`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result); //print success message
        setUser({}); //set user state to empty object
        localStorage.removeItem("user"); //remove user from localStorage
        navigate("/"); //navigate back to home
      })
      .catch((error) => {
        console.log(error); //print error message
        navigate("/"); //navigate back to home
      });
  };
  return <></>;
};

export default Logout;
