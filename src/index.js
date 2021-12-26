import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved, getUnresolvedBugs } from "./store/bugs";
import { projectAdded } from "./store/projects"

const store = configureStore();

store.subscribe(() => {
  console.log("Some data are changing already");
});

store.dispatch(bugAdded({ description: "Bug One (React Native)" }));
store.dispatch(bugAdded({ description: "Bug Two (React with NextJS)" }));
store.dispatch(bugAdded({ description: "Bug Three (React Native with expo)" }));
store.dispatch(bugRemoved({ id: 1 }));
store.dispatch(bugResolved({ id: 2 }));

console.log(getUnresolvedBugs(store.getState()) === getUnresolvedBugs(store.getState()));

store.dispatch(projectAdded({
    name: "Lend Naira Web Project"
}));