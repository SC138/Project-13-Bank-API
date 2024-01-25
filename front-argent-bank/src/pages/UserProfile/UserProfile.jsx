import { NavBar } from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { profileActions } from "../../store/actions/profileActions.js";
import { editName } from "../../store/actions/editNameActions.js";

// Définit le composant UserProfile.
export function UserProfile() {
  // Permet de dispatcher des actions Redux.
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Récupère l'état d'authentification et les informations de l'utilisateur depuis le store Redux.
  const isAuth = useSelector((state) => state.login.isAuth);
  const user = useSelector((state) => state.profile);
  // Récupère le token depuis le store Redux.
  const token = useSelector((state) => state.login.token);

  // Détermine si l'utilisateur est en train d'éditer son nom
  const [isEditing, setIsEditing] = useState(false);
  // Stocke les valeurs du formulaire pour le prénom et le nom
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  // Effet exécuté au montage du composant ou lorsque les dépendances changent
  useEffect(() => {
    // Si l'utilisateur est authentifié
    if (isAuth) {
      // Récupère les données du profil
      dispatch(profileActions({ isAuth, token }));
    } else {
      // Sinon, redirige vers la page de connexion
      navigate("/signIn");
    }
    // Dépendances de l'effet
  }, [dispatch, isAuth, navigate, token]);

  // Gestionnaire d'événements pour activer le mode édition
  const handleEditName = () => {
    // Active le mode édition
    setIsEditing(true);
  };

  // Gestionnaire d'événements pour la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    dispatch(editName({ token, formData })); // Envoie les données éditées
    dispatch(profileActions({ isAuth, token })); // Recharge les données du profil

    // Réinitialise le formulaire et désactive le mode édition
    setFormData({
      firstname: "",
      lastname: "",
    });
    setIsEditing(false);
  };

  // Gestionnaire d'événements pour annuler l'édition
  const handleCancel = () => {
    setIsEditing(false); // Désactive le mode édition
  };

  // Gestionnaire d'événements pour les changements dans le formulaire
  const handleChange = (e) => {
    setFormData({
      ...formData, // Copie les valeurs existantes
      [e.target.name]: e.target.value, // Met à jour la valeur du champ modifié
    });
  };

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

  // Structure JSX du composant UserProfile.
  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {!isEditing ? (
              `${user.body.firstName} ${user.body.lastName}` // Affiche le nom si on n'est pas en mode édition
            ) : (
              // Formulaire d'édition si on est en mode édition
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={formData.firstname}
                  name="firstname"
                  onChange={handleChange}
                  placeholder={user.body.firstName}
                  required
                />
                <input
                  type="text"
                  value={formData.lastname}
                  name="lastname"
                  onChange={handleChange}
                  placeholder={user.body.lastName}
                  required
                />
                <button type="submit" className="save-button">
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </form>
            )}
          </h1>
          {/* Le bouton pour éditer le nom ne s'affiche que si on n'est pas déjà en mode édition */}
          {!isEditing && (
            <button className="edit-button" onClick={handleEditName}>
              Edit Name
            </button>
          )}
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
