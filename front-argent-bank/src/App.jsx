import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { UserProfil } from "./pages/UserProfil/UserProfil";
import "./global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profil" element={<UserProfil />} />
      </Routes>
    </Router>
  );
}

export default App;
