import {SET_FORECAST, SET_LOCATION} from "../actions/weather";

const initialState = {
    location: {
        title: '',
        woeid: 0,
    },
    forecast: [],
    selectedDayIndex: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case SET_LOCATION:
            return {
                ...state,
                location: action.payload,
            }
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;