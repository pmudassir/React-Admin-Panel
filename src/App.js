import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css"
import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList/>}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
