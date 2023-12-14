import cls from "../styles/InfoScreensStyles.module.scss";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { changeFields } from "features/slice/formSlice";
import { useDispatch } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Trash } from "shared/assets/icons/Trash";
import { Plus } from "shared/assets/icons/Plus";
import { InputCheckRadio } from "shared/ui/InputCheckRadio/InputCheckRadio";
import { useTypedSelector } from "shared/libs/hooks/useTypedSelector";

type SecondaryInfoProps = {
  onClickNext: () => void;
  onClickPrev: () => void;
};

type Values = {
  advantages: string[];
  checkbox: string[];
  radio: string;
};

export const SecondaryInfo = ({
  onClickNext,
  onClickPrev,
}: SecondaryInfoProps) => {
  const dispatch = useDispatch();

  const { advantages, checkbox, radio } = useTypedSelector(
    (store) => store.form.data
  );

  const schema = Yup.object().shape({
    advantages: Yup.array().of(
      Yup.string()
        .min(3, "Слишком короткое")
        .max(50, "Сликом длинное")
        .required("Необходимо для заполнения")
    ),
  });

  return (
    <div>
      <Formik
        validate={(values) => {
          const errors: Record<string, string> = {};
          if (!values.checkbox.length) {
            errors.checkbox = "Выберите хотя бы один вариант";
          }
          if (!values.radio) {
            errors.radio = "Выберите хотя бы один вариант";
          }
          return errors;
        }}
        validationSchema={schema}
        initialValues={{
          advantages,
          checkbox,
          radio,
        }}
        onSubmit={(values: Values) => {
          const filteredValues = {
            ...values,
            advantages: values.advantages.filter((i) => i.length),
          };
          dispatch(changeFields(filteredValues));
          onClickNext();
        }}
        //@ts-ignore
        component={({ values, errors, touched }) => (
          <Form className={cls.inputs_wrapper}>
            <div>Преимущества</div>
            <FieldArray
              name="advantages"
              render={(arrayHelpers) => (
                <div>
                  {values.advantages.map((i, index) => (
                    <div className={cls.advantage_wrap} key={index}>
                      <Input
                        style={{ marginTop: "0" }}
                        id={`field-advantages-${index + 1}`}
                        name={`advantages.${index}`}
                        error={errors.advantages?.[index]}
                        //@ts-ignore
                        touched={touched.advantages?.[index]}
                      />
                      {values.advantages.length > 1 ? (
                        <Trash
                          id={`button-remove-${index + 1}`}
                          classNames={cls.trash_icon}
                          onClick={() => arrayHelpers.remove(index)}
                        />
                      ) : null}
                    </div>
                  ))}
                  <div>
                    <Plus
                      id="button-add"
                      classNames={cls.plus_icon}
                      onClick={() => arrayHelpers.push("")}
                    />
                  </div>
                </div>
              )}
            ></FieldArray>
            <InputCheckRadio
              type="checkbox"
              labelText="Checkbox группа"
              id="field-checkbox-group-option"
              name="checkbox"
              values={[1, 2, 3]}
              error={errors.checkbox}
            />
            <InputCheckRadio
              labelText="Radio группа"
              type="radio"
              id="field-radio-group-option"
              name="radio"
              values={[1, 2, 3]}
              error={errors.radio}
            />
            <div className={cls.button_group}>
              <Button onClick={onClickPrev} id="button-back" outline={true}>
                Назад
              </Button>
              <Button id="button-next" type="submit">
                Далее
              </Button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};
