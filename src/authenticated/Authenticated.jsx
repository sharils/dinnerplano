import React from "react";
import LogoutFormContainer from "../logout/LogoutFormContainer";

export default function Authenticated() {
  return (
    <React.Fragment>
      You&apos;ve successfully logged in. <LogoutFormContainer />
    </React.Fragment>
  );
}
