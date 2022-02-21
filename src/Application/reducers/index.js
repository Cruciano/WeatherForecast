import {combineReducers} from "redux";
import weather from './weather';
import infoUi from './infoUi.js';

export default combineReducers({
    weather,
    infoUi,
});