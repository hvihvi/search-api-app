import React, { ChangeEventHandler } from "react";
import { HiddenForA11y } from "./HiddenForA11y";
import "./TextInput.css";

export const TextInput = ({ label, value, onChange, id }: TextInputProps) => (
  <div>
    <HiddenForA11y>
      <label htmlFor={id}>{label}</label>
    </HiddenForA11y>
    <input
      className="TextInput"
      id={id}
      onChange={onChange}
      value={value}
      placeholder={label}
    />
  </div>
);

type TextInputProps = {
  onChange?: ChangeEventHandler<any> | undefined;
  value: any;
  label: string;
  id: string;
};
