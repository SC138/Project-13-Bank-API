// Définit l'état initial du reducer avec deux propriétés : 'data' et 'error'.
const initialState = {
  data: null, // 'data' stockera les informations de l'utilisateur après une édition réussie.
  error: null, // 'error' contiendra des informations d'erreur en cas d'échec de l'édition.
};

// Le reducer 'editNameReducer' gère les états liés à l'édition du nom de l'utilisateur.
const editNameReducer = (state = initialState, action) => {
  // La fonction prend l'état actuel et une action, et retourne un nouvel état basé sur le type d'action.
  switch (action.type) {
    case "EDIT_NAME_SUCCESS":
      // En cas de succès de l'édition du nom, met à jour l'état avec les nouvelles données.
      return {
        ...state, // Garde le reste de l'état inchangé.
        data: action.payload, // Remplace 'data' par les données reçues de l'action.
      };
    case "EDIT_NAME_ERROR":
      // En cas d'erreur lors de l'édition, met à jour l'état avec l'erreur reçue.
      return {
        ...state, // Garde le reste de l'état inchangé.
        error: action.payload, // Remplace 'error' par l'erreur reçue de l'action.
      };
    default:
      // Si l'action n'est pas reconnue, retourne l'état actuel sans changement.
      return state;
  }
};

export default editNameReducer;
