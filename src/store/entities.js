import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReducer from "./projects";
import usersReducers from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  users: usersReducers
});