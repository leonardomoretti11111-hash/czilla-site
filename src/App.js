import React, { useState } from "react";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import AppSoon from "./components/AppSoon";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("landing");

  return (
    <div className="App">
      {page === "landing" && <Landing onEnter={() => setPage("dashboard")} />}
      {page === "dashboard" && <Dashboard />}
      {page === "appsoon" && <AppSoon />}
      <Footer onNav={setPage} />
    </div>
  );
}

export default App;
