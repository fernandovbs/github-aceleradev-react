import { combineReducers } from "redux";
import repositories from "./repositories";
import users from "./users";
export default combineReducers({
  repositories,
  users
});
