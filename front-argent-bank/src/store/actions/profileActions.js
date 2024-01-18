import { dataServiceProfile } from "../../api/dataService";
import { PROFILE } from "../../api/config";

// Action pour récupérer les donnés du profil de l'utilisateur
export const profileActions =
    // Cette fonction prend un objet avec les propriétés isAuth et token.
    ({ isAuth, token }) =>
    // Retourne une fonction asynchrone grâce à Redux Thunk.
    async (dispatch) => {
      // Vérifie si l'utilisateur est authentifié et possède un token.
      if (!isAuth && !token) {
        // Si ce n'est pas le cas, dispatch une action PROFILE_ERROR.
        dispatch({
          type: "PROFILE_ERROR",
        });
        // Sortie anticipée de la fonction si l'utilisateur n'est pas authentifié.
        return;
      }
      try {
        // Essaie de récupérer les données du profil avec le token d'authentification.
        const response = await dataServiceProfile(token).post(PROFILE, {
          headers: {
            // Ajoute le token dans les headers de la requête pour l'authentification.
            Authorization: `Bearer ${token}`,
          },
        });
        // Dispatch l'action PROFILE_SUCCESS avec les données du profil en payload.
        dispatch({
          type: "PROFILE_SUCCESS",
          payload: response.data,
        });
      } catch (error) {
        // En cas d'erreur lors de la requête, dispatch une action PROFILE_ERROR avec l'erreur en payload.
        dispatch({
          type: "PROFILE_ERROR",
          payload: error,
        });
      }
    };
