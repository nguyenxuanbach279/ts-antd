import React from "react";
import { Form, FormItemProps, Input } from "antd";
import { useController, UseControllerProps } from "react-hook-form";

interface RHFInputProps extends FormItemProps, UseControllerProps<any> {
  name: string;
  label: string;
  rules?: any;
}

function RHFInput(props: RHFInputProps) {
  const { name, label, rules, control, ...restProps } = props;
  const { field, fieldState, formState } = useController({
    name,
    control,
    rules,
  });

  const { error } = fieldState;
  const { isSubmitted } = formState;

  return (
    <Form.Item
      label={label}
      validateStatus={error ? "error" : ""}
      help={error?.message}
      {...restProps}
    >
      <Input {...field} status={error && isSubmitted ? "error" : ""} />
    </Form.Item>
  );
}

export default RHFInput;
