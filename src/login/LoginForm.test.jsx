import React from "react";
import renderer from "react-test-renderer";
import LoginForm from "./LoginForm";

const getInputProps = ({ onChange = () => {}, value = "" } = {}) => ({
  onChange,
  value
});

it("renders correctly", () => {
  const tree = renderer
    .create(
      <LoginForm
        email={getInputProps({ value: "alice@example.com" })}
        password={getInputProps({ value: "alice's password" })}
      >
        Facebook
      </LoginForm>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
