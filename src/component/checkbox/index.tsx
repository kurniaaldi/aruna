import React, { ChangeEventHandler } from "react";

interface IPropCheckbox {
  name?: string;
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

const Checkbox = (props: IPropCheckbox) => {
  const { name, checked, onChange, disabled } = props;
  return (
    <input
      data-testid={name}
      disabled={disabled}
      name={name}
      checked={checked}
      onChange={onChange}
      style={{ width: 20, height: 20 }}
      type="checkbox"
    />
  );
};

export default Checkbox;
