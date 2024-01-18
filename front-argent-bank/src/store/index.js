// Importe la fonction configureStore de Redux Toolkit pour créer un store Redux.
import { configureStore } from "@reduxjs/toolkit";
// Importe les reducers pour gérer les états liés à la connexion et au profil utilisateur.
import loginReducer from "./reducers/loginReducer";
import profileReducer from "./reducers/profileReducer";

// Crée un store Redux en utilisant configureStore, qui simplifie la configuration du store.
const store = configureStore({
  // Configure les reducers spécifiques pour les états de connexion et de profil.
  reducer: {
    login: loginReducer, // Associe le loginReducer à l'état 'login'.
    profile: profileReducer, // Associe le profileReducer à l'état 'profile'.
  },
  // Configure les middlewares par défaut de Redux Toolkit.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Désactive la vérification de la sérialisation pour permettre les valeurs non sérialisables comme les promesses.
      serializableCheck: false,
    }),
});

// Exporte le store configuré pour l'utiliser dans l'application.
export { store };
