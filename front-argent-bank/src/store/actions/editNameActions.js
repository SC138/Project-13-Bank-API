import { dataServiceProfile } from "../../api/dataService";
import { PROFILE } from "../../api/config";

// Action Redux pour éditer le nom de l'utilisateur. userData contient les informations de l'utilisateur et le token.
export const editName = (userData) => async (dispatch) => {
  try {
    // Appelle l'API de mise à jour du profil avec les nouvelles valeurs de firstName et lastName.
    const response = await dataServiceProfile().put(
      PROFILE,
      {
        firstName: userData.formData.firstname, // Nouveau prénom.
        lastName: userData.formData.lastname, // Nouveau nom.
      },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`, // Utilise le token d'autorisation pour l'authentification.
        },
      }
    );
    // En cas de succès, envoie une action de succès avec les données de réponse au reducer.
    dispatch({ type: "EDIT_NAME_SUCCESS", payload: response.data });
  } catch (error) {
    // En cas d'échec, envoie une action d'erreur avec les informations d'erreur au reducer.
    dispatch({ type: "EDIT_NAME_ERROR", payload: error });
  }
};
