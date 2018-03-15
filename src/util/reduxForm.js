import { map } from "ramda";
import { bindActionCreators } from "redux";
import { createAction } from "redux-actions";

const onSubmitCreator = dispatch => actionCreator => payload =>
  new Promise((...meta) => dispatch(actionCreator({ payload, meta })));

const rfBindActionCreators = (actionCreators, dispatch) =>
  map(onSubmitCreator(dispatch), actionCreators);

export const rfCreateAction = actionType =>
  createAction(actionType, ({ payload }) => payload, ({ meta }) => meta);

export const rfGetSubmitDisabled = props =>
  !props.anyTouched || props.pristine || props.submitting;

const onSubmitKeysDefaults = { onSubmit: true };

export const rfPromisifyOnSubmits = (
  actionCreators,
  onSubmitKeys = onSubmitKeysDefaults
) => {
  const notOnSubmits = Object.keys(actionCreators).filter(
    key => !onSubmitKeys[key]
  );
  const onSubmits = Object.keys(onSubmitKeys).reduce(
    (accu, onSubmitKey) => ({
      ...accu,
      [onSubmitKey]: actionCreators[onSubmitKey]
    }),
    {}
  );
  return dispatch => ({
    ...bindActionCreators(notOnSubmits, dispatch),
    ...rfBindActionCreators(onSubmits, dispatch)
  });
};
