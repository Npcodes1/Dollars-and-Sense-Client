import React from "react";
import Header from "./shared/Header";
import HomePage from "./components/HomePage";
import FinancialTracker from "./components/FinancialTracker";
import CreditScore from "./components/CreditScore";
import Resources from "./components/Resources";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Footer from "./shared/Footer";

// import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <FinancialTracker />
      <CreditScore />
      <Resources />
      <Login />
      <Signup />
      {/* <Admin /> */}
      <Footer />
    </div>
  );
}

export default App;
