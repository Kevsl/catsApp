import { combineReducers } from "redux";
// import auth from "./auth";
// import general from "./general";
// import message from "./message";
import dayInformations from './dayInformations';
import user from './user';


export default combineReducers({
  dayInformations,
  user
});
  