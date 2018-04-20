import React from "react";
import renderer from "react-test-renderer";
import Provizanto from "../../test/util/Provizanto";
import LoginForm from "./LoginForm";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Provizanto>
        <LoginForm onSubmit={() => {}} />
      </Provizanto>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
