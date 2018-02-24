import { path, pipe } from "ramda";

const getValue = path(["target", "value"]);

export default piped => pipe(getValue, piped);
