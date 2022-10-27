// Lấy data ra
import { createSelector } from "reselect";
import { INIT_STATE_LOGIN } from "./state";

const selectMyLogin = (state) => state.loginReducers || INIT_STATE_LOGIN;

const selectLoading = createSelector(selectMyLogin, (state) => state.isLoading);
const selectLogin = createSelector(selectMyLogin, (state) => state.infoUser);

export { selectLogin, selectLoading };
