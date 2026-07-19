

import type {
  FocusEventHandler,
  FormEventHandler,
} from "react";

export type NativeFieldProps = {
  name?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  onChange?: FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  "aria-invalid"?: boolean | "true" | "false";
  "aria-describedby"?: string;
  "aria-required"?: boolean | "true" | "false";
};

/** Radix value-based controls (Select, RadioGroup) with Controller. */
export type ValueFieldProps = {
  name?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
};

/** Radix checked-based controls (Checkbox, Switch) with Controller. */
export type CheckedFieldProps = {
  name?: string;
  checked?: boolean | "indeterminate";
  defaultChecked?: boolean | "indeterminate";
  onCheckedChange?: (checked: boolean | "indeterminate") => void;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  required?: boolean;
};

export type FormFieldContract = {
  name: string;
  label?: string;
  description?: string;
  required?: boolean;
  error?: boolean | string;
  helperText?: string;
};
