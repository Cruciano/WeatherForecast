import {SER_ERROR, SET_ISLOADING} from "../actions/infoUi";

const initialState = {
    isLoading: false,
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ISLOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case SER_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;