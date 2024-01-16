import { dataServiceProfile } from "../../api/dataService";
import { PROFILE } from "../../api/config";

export const profileActions =
  ({ isAuth, token }) =>
  async (dispatch) => {
    if (!isAuth && !token) {
      dispatch({
        type: "PROFILE_ERROR",
      });
      return;
    }
    try {
      const response = await dataServiceProfile(token).post(PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: "PROFILE_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: error,
      });
    }
  };
