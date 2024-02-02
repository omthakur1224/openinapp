import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import SideBar from "./sidebar/SideBar";
import Upload from "./upload/Upload";
import Signin from "./signin/Signin";
import Dashboard from "./dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Upload /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
