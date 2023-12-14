import cls from "../styles/InfoScreensStyles.module.scss";

import { ESex } from "features/slice/formSlice";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { changeFields } from "features/slice/formSlice";
import { useDispatch } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { ReactNode } from "react";
import { useTypedSelector } from "shared/libs/hooks/useTypedSelector";

type PrimryInfoProps = {
  onClickNext: () => void;
  onClickPrev: () => void;
};

export const PrimaryInfo = ({ onClickNext, onClickPrev }: PrimryInfoProps) => {
  type Values = {
    nickname: string;
    name: string;
    sername: string;
    sex: ESex | "";
  };

  const FormSchema = Yup.object().shape({
    nickname: Yup.string()
      .max(30, "Слишком длинный никнейм")
      .min(2, "Слишком короткий никнейм")
      .matches(/^[a-zA-Zа-яА-Я0-9]+$/, "Может содрежать только буквы и цифры")
      .required("Обязательно для заполнения"),
    name: Yup.string()
      .max(30, "Слишком длинное имя")
      .min(2, "Слишком короткое имя")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Может содрежать только буквы")
      .required("Обязательно для заполнения"),
    sername: Yup.string()
      .max(50, "Слишком длинное имя")
      .min(2, "Слишком короткое имя")
      .matches(/^[a-zA-Zа-яА-Я]+$/, "Может содрежать только буквы")
      .required("Обязательно для заполнения"),
  });

  const dispatch = useDispatch();

  const { nickname, name, sername, sex } = useTypedSelector(
    (store) => store.form.data
  );
  return (
    <div>
      <Formik
        validationSchema={FormSchema}
        initialValues={{
          nickname,
          name,
          sername,
          sex,
        }}
        onSubmit={(values: Values) => {
          dispatch(changeFields(values));
          onClickNext();
        }}
      >
        {({ errors, touched }) => (
          <Form className={cls.inputs_wrapper}>
            <Input
              labelText="Никнейм"
              id="field-nickname"
              name="nickname"
              error={errors.nickname}
              touched={touched.nickname}
            />
            <Input
              labelText="Имя"
              id="field-name"
              name="name"
              error={errors.name}
              touched={touched.name}
            />
            <Input
              labelText="Фамилия"
              id="field-sername"
              name="sername"
              error={errors.sername}
              touched={touched.sername}
            />
            <Input
              labelText="Пол"
              id="field-sex"
              error={errors.sex}
              touched={touched.sex}
              as="select"
              name="sex"
              children={[
                (
                  <option selected hidden disabled>
                    Выберите пол
                  </option>
                ) as ReactNode,
                (
                  <option id="field-sex-option-man" value={ESex.MAN}>
                    мужской
                  </option>
                ) as ReactNode,
                (
                  <option id="field-sex-option-woman" value={ESex.WOMAN}>
                    женский
                  </option>
                ) as ReactNode,
              ]}
            ></Input>
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
      </Formik>
    </div>
  );
};
