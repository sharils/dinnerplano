import React from "react";
import renderer from "react-test-renderer";
import Provizanto from "../../test/util/Provizanto";
import LogoutPage from "./LogoutPage";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provizanto>
        <LogoutPage onSubmit={() => {}} />
      </Provizanto>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
