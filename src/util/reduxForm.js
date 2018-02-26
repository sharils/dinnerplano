import { mapObjIndexed } from "ramda";
import { createAction } from "redux-actions";

const onSubmitCreator = dispatch => actionCreator => payload =>
  new Promise((...meta) => dispatch(actionCreator({ payload, meta })));

export const rfBindActionCreators = (actionCreators, dispatch) =>
  mapObjIndexed(onSubmitCreator(dispatch), actionCreators);

export const rfCreateAction = actionType =>
  createAction(actionType, ({ payload }) => payload, ({ meta }) => meta);
