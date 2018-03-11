const firebase = global.firebase || {
  initializeApp: () => ({})
  // test doesn't call auth
};

export const { initializeApp } = firebase;
export const { auth } = firebase;
