export default (fn, ...args) => {
  if (typeof fn === "function") {
    fn.call(null, ...args);
  }
};
