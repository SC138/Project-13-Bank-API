import logo from "../assets/img/argentBankLogo.png";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../store/actions/loginActions";
import userIcon from "../assets/img/user-icon.svg";
import logoutIcon from "../assets/img/logout-icon.svg";

// Définit le composant NavBar.
export function NavBar() {
  // Hooks de Redux pour dispatcher des actions et récupérer l'état d'authentification.
  const navigate = useNavigate();
  // Permet de dispatcher des actions Redux.
  const dispatch = useDispatch();
  // Récupère l'état d'authentification et le prénom de l'utilisateur depuis Redux.
  const isAuth = useSelector((state) => state.login.isAuth);
  const firstName = useSelector((state) => state.profile.body.firstName);

  // Fonction pour gérer la déconnexion.
  function handleSignOut() {
    // Dispatch l'action de déconnexion.
    dispatch(logout());
    // Redirige vers la page d'accueil.
    navigate("/");
  }

  // Structure JSX du composant NavBar.
  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuth ? (
            <>
              <Link className="main-nav-item-connect" to="/profile">
                <i className="fa fa-user-circle user-connect"></i>
                <img src={userIcon} alt="User Profile" className="user-icon" />
                {firstName}
              </Link>
              <Link className="main-nav-item" onClick={handleSignOut} to="/">
                <i className="fa fa-user-circle"></i>
                <img src={logoutIcon} alt="Logout" className="logout-icon" />
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
      {/* Outlet permet d'afficher le contenu des composants enfants. */}
      <Outlet />
    </>
  );
}
