import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPage from "./pages/AdminPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>
  );
}

export default App;
