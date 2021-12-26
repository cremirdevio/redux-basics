import configureStore from "./store/configureStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getBugsByUser,
  bugAssignToUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";

const store = configureStore();

store.subscribe(() => {
  console.log("Some data are changing already");
});

// store.dispatch(userAdded({ name: "Joseph" }));
// store.dispatch(userAdded({ name: "Esther" }));
// store.dispatch(userAdded({ name: "Larry" }));
// store.dispatch(bugAdded({ description: "Bug One (React Native)" }));
// store.dispatch(bugAdded({ description: "Bug Two (React with NextJS)" }));
// store.dispatch(bugAdded({ description: "Bug Three (React Native with expo)" }));
// store.dispatch(bugRemoved({ id: 1 }));
// store.dispatch(bugResolved({ id: 2 }));
// store.dispatch(bugAssignToUser({ userId: 1, bugId: 2}));

// // console.log(getUnresolvedBugs(store.getState()) === getUnresolvedBugs(store.getState()));
// console.log(getBugsByUser(1)(store.getState()));

// store.dispatch(projectAdded({
//     name: "Lend Naira Web Project"
// }));

store.dispatch((dispatch, getState) => {
  //  call an api
  console.log("calling an api")
  // if it resolves
  store.dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
});
