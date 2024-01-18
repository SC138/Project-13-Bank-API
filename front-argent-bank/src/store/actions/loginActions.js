// Importe le service qui va faire la requête à l'API
import { dataService } from "../../api/dataService";
// Importe la configuration de l'enpoint LOGIN pour la connexion
import { LOGIN } from "../../api/config";

// Créateur d'action pour la connexion qui retourne une fonction asynchrone grâce à Redux Thunk.
export const login = (formData) => async (dispatch) => {
  try {
    const response = await dataService().post(LOGIN, {
      email: formData.email,
      password: formData.password,
    });
    // Dispatch l'action LOGIN_SUCCESS avec le token comme payload si la connexion est réussie.
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data.body.token });
  } catch (error) {  
    // Dispatch l'action LOGIN_ERROR avec l'erreur comme payload si la connexion échoue.
    dispatch({ type: "LOGIN_ERROR", payload: error });
  }
};

// Créateur d'action pour la déconnexion qui retourne une fonction asynchrone grâce à Redux Thunk.
export const logout = () => async (dispatch) => {
  // Dispatch l'action LOGOUT.
  dispatch({ type: "LOGOUT" });
};
