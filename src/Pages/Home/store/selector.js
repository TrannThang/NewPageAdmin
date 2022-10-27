// Lấy data ra
import { createSelector } from "reselect";
import { INIT_STATE } from "./state";

const selectMyContent = (state) => state.myListContentReducers || INIT_STATE;

const selectLoading = createSelector(
  selectMyContent,
  (state) => state.isLoading
);
const selectZingNewContent = createSelector(
  selectMyContent,
  (state) => state.listZingNewContent
);
export { selectLoading, selectZingNewContent };
