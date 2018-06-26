import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import { createStructuredSelector } from "reselect";

export default (displayName, mapStateToProps, ...rest) =>
  compose(
    setDisplayName(displayName),
    connect(
      createStructuredSelector(mapStateToProps),
      ...rest
    )
  );
