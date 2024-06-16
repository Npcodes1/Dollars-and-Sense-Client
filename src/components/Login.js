import React from "react";
import "../Pages.css";
import "../MediaQueries.css";
import { Link, useNavigate } from "react-router-dom";
// import { googleLogout, useGoogleLogin } from "@react-oauth/google";

const url = "http://localhost:8080";

function Login({ user, setUser }) {
  //To navigate to other pages
  const navigate = useNavigate();

  //change state of user and profile
  // const [profile, setProfile] = useState([]);

  const handleLoginForm = (e) => {
    //prevent default refreshing
    e.preventDefault();

    //print success message
    console.log("The form is working!");

    //use body variable to hold data that's submitted
    const body = {
      username: e.target.username.value,
      password: e.target.username.value,
    };

    //print the value of each input using its name attribute
    console.log(body.username);
    console.log(body.password);

    //need to send/post the data to the backend
    fetch(`${url}/api/login/local`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  //to get to authorization pages for Google and GitHub
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => setUser(codeResponse),
  //   onError: (error) => console.log("Login Failed", error),
  // });

  // useEffect(() => {
  //   fetch(`${url}/auth/google`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       navigate("/");
  //       setUser(user);
  //     })
  //     .catch((error) => console.log(error));
  // });

  return (
    <>
      <main>
        <section className="section-container">
          <div className="content-wrapper">
            <h2 className="h2-title">LOGIN</h2>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginForm}>
            <div className="form-fields">
              {/* Username */}
              <div className="form-details">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  id="username"
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
                  // required
                />
              </div>

              {/* Submit Button */}
              <div className="form-submit">
                <button className="btn" type="submit">
                  Login
                </button>
              </div>
              {/* <GoogleLogin onSuccess={responseMessage} onError={errorMessage} /> */}

              {/* <button className="auth-btn" type="submit">
                Sign in with GitHub
              </button> */}

              {/* Forgot Username/Password */}
              <div className="form-link">
                <span>
                  Already have an account but can't login?
                  <Link to="/forgot-login"> Forgot Username/Password</Link>
                </span>
              </div>
              {/* Admin Users Redirect */}
              <div className="form-link">
                <span>
                  Are you an Admin? Login to your account here:
                  <Link to="/admin"> Admin</Link>
                </span>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
