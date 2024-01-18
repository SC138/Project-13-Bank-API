// État initial du reducer définissant si l'utilisateur est authentifié, le token d'authentification et une erreur potentielle.
const initialState = { isAuth: false, token: null, error: null };

// Le reducer gère l'état de connexion de l'utilisateur.
const loginReducer = (state = initialState, action) => {
  // Utilise switch pour dispatcher des actions spécifiques.
  switch (action.type) {
    case "LOGIN_SUCCESS":
      // En cas de succès de connexion, met à jour l'état pour indiquer que l'utilisateur est authentifié, stocke le token et efface les erreurs.
      return {
        ...state,
        isAuth: true,
        token: action.payload,
        error: null,
      };
    case "LOGIN_ERROR":
      // En cas d'échec de connexion, met à jour l'état pour indiquer que l'utilisateur n'est pas authentifié, efface le token et définit une erreur.
      return {
        ...state,
        isAuth: false,
        token: null,
        error: "Unknow user",
      };
    case "LOGOUT":
      // En cas de déconnexion, réinitialise l'état à ses valeurs initiales.
      return {
        ...state,
        isAuth: false,
        token: null,
        error: null,
      };
    default:
      // Retourne l'état actuel pour toutes les autres actions qui ne sont pas gérées.
      return state;
  }
};
// Exporte le reducer pour l'utiliser dans la création du store Redux.
export default loginReducer;