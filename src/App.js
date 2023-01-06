import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css"
import Home from "./pages/Home";
import UserList from "./pages/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
