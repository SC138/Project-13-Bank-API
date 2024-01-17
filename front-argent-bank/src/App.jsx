import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { useSelector } from "react-redux";
import "./global.css";

function App() {
  const isAuth = useSelector((state) => state.login.isAuth);

  return (
    <Routes>
      {isAuth ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/profile" element={<UserProfile />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
        </>
      )}
    </Routes>
  );
}

export default App;
