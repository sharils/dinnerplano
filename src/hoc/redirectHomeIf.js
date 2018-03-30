import { partialRight } from "ramda";
import { Redirect } from "react-router-dom";
import { branch, compose, renderComponent, withProps } from "recompose";

const redirect = compose(withProps({ to: "/" }), renderComponent(Redirect));

export default partialRight(branch, [redirect]);
