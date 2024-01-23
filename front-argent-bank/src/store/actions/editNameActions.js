import {dataServiceProfile} from "../../api/dataService";
import { PROFILE } from "../../api/config";

export const editName = (userData) => async (dispatch) => {
  try {
    const response = await dataServiceProfile().put(
      PROFILE,
      {
        firstName: userData.formData.firstname,
        lastName: userData.formData.lastname,
      },
      {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      }
    );
    dispatch({ type: "EDIT_NAME_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "EDIT_NAME_ERROR", payload: error});
  }
};
