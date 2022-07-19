import { render, screen } from "@testing-library/react";
import Input from "./index";
import renderer from "react-test-renderer";

test("input", () => {
  let values = {
    name: "input1",
    value: 10,
  };

  const handleChange = (event: any) => {};

  render(
    <Input value={values.value} name={values.name} onChange={handleChange} />
  );

  const inputElement = screen.getByTestId("input1");
  expect((inputElement as HTMLInputElement).value).toBe("10");
  expect((inputElement as HTMLInputElement).name).toBe("input1");
});

test("input-snapshoot", () => {
  let values = {
    name: "input1",
    value: 10,
  };

  const handleChange = (event: any) => {
    return event;
  };

  const tree = renderer
    .create(
      <Input value={values.value} name={values.name} onChange={handleChange} />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
