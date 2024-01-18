// L'état initial pour le reducer qui inclut un message potentiel, des informations sur le corps du profil et l'état d'authentification.
const initialState = {
  // Par défaut, tout initialisé à null ou false.
  message: null,
  body: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
  },
  isAuth: false,
};

// Le reducer qui gère les modifications de l'état en fonction des actions reçues.
const profileReducer = (state = initialState, action) => {
  // Utilise une instruction switch pour répondre à différentes actions.
  switch (action.type) {
    case "PROFILE_SUCCESS":
      // En cas de succès de la récupération du profil, mets à jour l'état avec les données reçues et marque l'utilisateur comme authentifié.
      return {
        ...state, // On garde les propriétés de l'état initial.
        // Mise à jour des propriétés de l'état avec les données reçues.
        message: action.payload.message,
        body: {
          id: action.payload.body.id,
          email: action.payload.body.email,
          firstName: action.payload.body.firstName,
          lastName: action.payload.body.lastName,
        },
        isAuth: true, // L'utilisateur est authentifié.
      };
    case "PROFILE_ERROR":
      // En cas d'erreur de récupération du profil, mets à jour l'état pour refléter cette erreur.
      return {
        ...state, // On garde les propriétés de l'état initial.
        isAuth: false, // L'utilisateur n'est pas authentifié.
      };
    default:
      // Pour toute autre action, retourne l'état actuel sans modification.
      return state;
  }
};
// Exporte le reducer pour l'utiliser dans la création du store Redux.
export default profileReducer;
