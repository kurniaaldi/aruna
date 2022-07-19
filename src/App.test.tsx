import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";

test("renders learn react link", () => {
  render(<App />);
});

test("matches snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
