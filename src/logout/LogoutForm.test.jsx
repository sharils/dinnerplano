import React from "react";
import renderer from "react-test-renderer";
import Provizanto from "../../test/util/Provizanto";
import LogoutForm from "./LogoutForm";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provizanto>
        <LogoutForm onSubmit={() => {}} />
      </Provizanto>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
