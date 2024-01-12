import { dataService } from "../../api/dataService";
import { LOGIN } from "../../api/config";

export const login = (formData) => async (dispatch) => {
  try {
    const response = await dataService().post(LOGIN, {
      email: formData.email,
      password: formData.password,
    });
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data.body.token });
  } catch (error) {  
    dispatch({ type: "LOGIN_ERROR", payload: error });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
