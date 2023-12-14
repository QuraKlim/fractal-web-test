import { Field, FieldProps } from "formik";
import cls from "./InputCheckRadio.module.scss";

interface InputProps {
  type: "checkbox" | "radio";
  values: string[] | number[];
  id: string;
  name: string;
  labelText: string;
  error: string | string[] | undefined;
}

export const InputCheckRadio = ({
  type,
  values,
  id,
  name,
  labelText,
  error,
}: InputProps) => {
  return (
    <div className={cls.group}>
      <label htmlFor="checkbox">{labelText}</label>
      <div className={cls.checkbox_group}>
        {values.map((value, index) => (
          <label id={`${id}-${index + 1}`}>
            <Field type={type} name={name} value={`${value}`} />
            <div>{value}</div>
          </label>
        ))}
      </div>
      <div className={cls.error_message}>{error ?? ""}</div>
    </div>
  );
};
