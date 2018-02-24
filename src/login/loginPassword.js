import { createAction, handleAction } from "redux-actions";

const SET = "dinnerplano/loginPassword/SET";

export const getLoginPassword = state => state.loginPassword;

export const setLoginPassword = createAction(SET);

export default handleAction(SET, (state, { payload }) => payload, "");
