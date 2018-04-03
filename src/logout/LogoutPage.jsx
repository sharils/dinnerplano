import React from "react";
import { Link } from "react-router-dom";

export default function LogoutPage() {
  return (
    <React.Fragment>
      You have successfully logged out. <Link to="/login">Login again</Link>
    </React.Fragment>
  );
}
