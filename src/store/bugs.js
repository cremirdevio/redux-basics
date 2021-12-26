import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect'

let lastId = 0;

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {

    }
  },
});

// export const getUnresolvedBugs = state => state.entities.bugs.filter(bug => !bug.resolved);
export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => !bug.resolved)
);
export const { bugAdded, bugResolved, bugRemoved } = slice.actions;
export default slice.reducer;
