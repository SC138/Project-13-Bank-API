import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignIn/SignIn";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { useSelector } from "react-redux";
import "./global.css";

// Définit le composant fonctionnel App, point d'entrée principal de l'application.
function App() {
  // Récupère l'état d'authentification de l'utilisateur depuis Redux.
  const isAuth = useSelector((state) => state.login.isAuth);

  // Rendu du composant App, avec des routes conditionnelles basées sur l'état d'authentification.
  return (
    <Routes>
      {/* Si l'utilisateur est authentifié, rend ces routes */}
      {isAuth ? (
        <>
          {/* Route vers la page d'accueil */}
          <Route path="/" element={<Home />} />
          {/* Route vers la page de connexion */}
          <Route path="/sign-in" element={<SignIn />} />
          {/* Route vers le profil utilisateur */}
          <Route path="/profile" element={<UserProfile />} />
        </>
      ) : (
        <>
          {/* Si l'utilisateur n'est pas authentifié, rend ces routes */}
          {/* Route vers la page d'accueil */}
          <Route path="/" element={<Home />} />
          {/* Redirige l'accès au profil vers la page de connexion */}
          <Route path="/profile" element={<SignIn />} />
          {/* Route vers la page de connexion */}
          <Route path="/sign-in" element={<SignIn />} />
        </>
      )}
    </Routes>
  );
}

export default App;
