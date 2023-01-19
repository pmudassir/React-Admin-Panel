import { Routes, Route } from "react-router-dom";
import "./app.css"
import Login from "./pages/Login";
import { PageRoutes } from "./PageRoutes";


function App() {
  return (
    <Routes>
      <Route path="/*" element={<PageRoutes />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
