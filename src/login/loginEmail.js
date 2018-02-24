const SET = "dinnerplano/loginEmail/SET";

export const getLoginEmail = state => state.loginEmail;

export const setLoginEmail = payload => ({
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
