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

  //------------------------------------------------------------------------------

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  useEffect(() => {
    if (isAuth) {
      dispatch(profileActions({ isAuth, token }));
    } else {
      navigate("/signIn");
    }
  }, [dispatch, isAuth, navigate, token]);

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editName({ token, formData }));
    dispatch(profileActions({ isAuth, token }));
    setFormData({
      firstname: "",
      lastname: "",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //-----------------------------------------------------------

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
                />
                <input
                  type="text"
                  value={formData.lastname}
                  name="lastname"
                  onChange={handleChange}
                  placeholder={user.body.lastName}
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
