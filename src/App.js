import { Routes, Route } from "react-router-dom";
import "./app.css"
import Login from "./pages/Login";
import { PageRoutes } from "./PageRoutes";


function App() {
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin
  return (
    <Routes>
      {admin &&(
        <>
          <Route path="/*" element={<PageRoutes />} />
        </>)}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
