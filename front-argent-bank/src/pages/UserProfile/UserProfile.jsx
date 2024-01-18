import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { profileActions } from "../../store/actions/profileActions.js";

// Définit le composant UserProfile.
export function UserProfile() {
  // Permet de dispatcher des actions Redux.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Récupère l'état d'authentification et les informations de l'utilisateur depuis le store Redux.
  const isAuth = useSelector((state) => state.login.isAuth);
  const user = useSelector((state) => state.profile.body);
  // Récupère le token depuis le store Redux.
  const token = useSelector((state) => state.login.token);

  // useEffect qui se déclenche après le rendu du composant.
  useEffect(() => {
    // Si l'utilisateur n'est pas authentifié, il est redirigé vers la page de connexion.
    if (!isAuth) {
      navigate("/signIn");
    } else {
      // Si l'utilisateur est authentifié, dispatch l'action pour récupérer les infos du profil.
      dispatch(profileActions({ isAuth, token }));
    }
    // Dépendances du useEffect.
  }, [dispatch, isAuth, navigate, token]);

  // Rendu du composant, incluant NavBar, le contenu principal et Footer.
  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${user.firstName} ${user.lastName}`}!{/* Tony Jarvis! */}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
