import React, { ChangeEventHandler } from "react";

interface IPropInput {
  name?: string;
  value?: string | number | any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string | number | any;
}

const Input = (props: IPropInput) => {
  const { name, value, onChange, defaultValue } = props;
  return (
    <input
      data-testid={name}
      defaultValue={defaultValue}
      name={name}
      value={value}
      onChange={onChange}
      type="number"
      style={{ width: "100%", padding: 5 }}
    />
  );
};

export default Input;
