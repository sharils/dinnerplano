const SET = "dinnerplano/loginPassword/SET";

export const getLoginPassword = state => state.loginPassword;

export const setLoginPassword = payload => ({
  type: SET,
  payload
});

export default (state = "", { type, payload }) => {
  switch (type) {
    case SET:
      return payload;
    default:
      return state;
  }
};
