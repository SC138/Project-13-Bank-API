import { NavBar } from "../../components/NavBar.jsx";
import { Footer } from "../../components/Footer.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/actions/loginActions";
import { profileActions } from "../../store/actions/profileActions.js";

//Composant SignIn.
export function SignIn() {
  // Hooks de Redux pour dispatcher des actions et naviguer entre les composants.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Sélection de l'état d'authentification, du token et de l'erreur depuis le store Redux.
  const isAuth = useSelector((state) => state.login.isAuth);
  const token = useSelector((state) => state.login.token);
  const error = useSelector((state) => state.login.error);

  // État local pour le formulaire de connexion.
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Gère les changements dans les champs de formulaire et met à jour l'état local.
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Gère la soumission du formulaire, empêche l'envoi classique du formulaire et dispatch l'action de connexion.
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formData));
  };

  // Se déclenche après le rendu ou la mise à jour du composant.
  useEffect(() => {
    // Fonction asynchrone pour effectuer des actions post-authentification.
    const datas = async () => {
      // Si l'utilisateur est authentifié, stocke le token et navigue vers le profil.
      if (isAuth) {
        // Stocke le token dans localStorage.
        localStorage.setItem("token", token);
        // Redirige vers le profil utilisateur.
        navigate("/profile");
        // Dispatch l'action pour récupérer les informations du profil.
        dispatch(profileActions(isAuth, token));
      }
    };
    // Exécute la fonction asynchrone datas().
    datas();
    //Dépendances du useEffect.
  }, [isAuth, navigate, token, dispatch]);

  // Structure JSX du composant, incluant le formulaire de connexion.
  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                id="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
          {error && <p className="error">{error}</p>}
        </section>
      </main>
      <Footer />
    </>
  );
}
