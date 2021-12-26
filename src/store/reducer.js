import { combineReducers } from "redux";
import entitiesReducer from "./entities";

export default combineReducers({
  entities: entitiesReducer
});


// Tasks - Ability to
// - assign a bug to a team member
// - get the list of bugs assigned to a team member
// 

// SOLUTION
// Add the action to bugs slice: assignMember(2)
// Add a selector to get list of bugs based on specific user
// (Optionally) Create a users slice to store users