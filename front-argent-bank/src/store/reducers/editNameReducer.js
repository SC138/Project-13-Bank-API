const initialState = {
    data: null,
    error: null,
};

const editNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case "EDIT_NAME_SUCCESS":
            return {
                ...state,
                data: action.payload,
            };
        case "EDIT_NAME_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default editNameReducer;