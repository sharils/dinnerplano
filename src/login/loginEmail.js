import { createAction, handleAction } from "redux-actions";

const SET = "dinnerplano/loginEmail/SET";

export const getLoginEmail = state => state.loginEmail;

export const setLoginEmail = createAction(SET);

export default handleAction(setLoginEmail, (state, { payload }) => payload, "");
