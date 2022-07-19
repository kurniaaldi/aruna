import { render, screen } from "@testing-library/react";
import Checkbox from "./index";
import renderer from "react-test-renderer";

test("dialog", () => {
  let values = {
    name: "input1",
    check: false,
  };

  const handleChange = (event: any) => {};

  render(
    <Checkbox
      checked={values.check}
      name={values.name}
      onChange={handleChange}
    />
  );

  const checkboxElement = screen.getByTestId("input1");
  expect((checkboxElement as HTMLInputElement).checked).toBe(false);
  expect((checkboxElement as HTMLInputElement).checked).toBe(false);
});

test("input-snapshoot", () => {
  let values = {
    name: "input1",
    check: false,
  };

  const handleChange = (event: any) => {};

  const tree = renderer
    .create(
      <Checkbox
        checked={values.check}
        name={values.name}
        onChange={handleChange}
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
