export default (fn, ...args) =>
  typeof fn === "function" ? [true, fn.call(null, ...args)] : [false];
