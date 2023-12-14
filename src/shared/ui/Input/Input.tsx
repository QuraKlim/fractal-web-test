import { Field, FieldProps } from "formik";
import cls from "./Input.module.scss";
import { ReactNode } from "react";
import { JsxElement } from "typescript";

interface InputProps {
  id: string;
  error?: string | undefined;
  touched?: boolean | undefined;
  labelText?: string | null;
  children?: ((props: FieldProps) => React.ReactNode) | ReactNode[];
  placeholder?: string;
  as?: "select" | "textarea" | "input" | "checkbox";
  name: string;
  style?: Record<string, number | string>;
}

export const Input = ({
  error,
  touched,
  id,
  name,
  labelText = null,
  children,
  placeholder,
  as = "input",
  style = {},
}: InputProps) => {
  return (
    <div style={style} className={cls.input_wrapper}>
      {labelText && <label htmlFor={name}>{labelText}</label>}
      <Field
        as={as}
        className={cls.input}
        id={id}
        name={name}
        placeholder={placeholder}
        children={children}
      />
      {error && touched ? (
        <div className={cls.error_message}>{error}</div>
      ) : null}
    </div>
  );
};
