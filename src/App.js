import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import SideBar from "./sidebar/SideBar";
import Upload from "./upload/Upload";
import Signin from "./signin/Signin";
import Dashboard from "./dashboard/Dashboard";
import Notifications from "./notification/Notifications";
import Setting from "./setting/Setting";
import Invoice from "./invoice/Invoice";
import Calendar from "./calendar/Calendar";
import Schedule from "./schedule/Schedule";

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
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
