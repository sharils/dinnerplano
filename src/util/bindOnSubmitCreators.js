import { mapObjIndexed } from "ramda";

const onSubmitCreator = dispatch => actionCreator => data =>
  new Promise((resolve, reject) =>
    dispatch(actionCreator([data, resolve, reject]))
  );

export default (actionCreators, dispatch) =>
  mapObjIndexed(onSubmitCreator(dispatch), actionCreators);
