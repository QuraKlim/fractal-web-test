import { Form, Formik } from "formik";
import cls from "shared/ui/Input/Input.module.scss";
import * as Yup from "yup";
import InputMask from "react-input-mask";
import { changeFields } from "features/slice/formSlice";
import { useDispatch } from "react-redux";
import { User } from "entities/User/User";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "shared/libs/hooks/useTypedSelector";

export const CredentialsScreen = () => {
  type Values = {
    phone: string;
    email: string;
  };

  const SignupSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/, "Некорректный телефон")
      .required("Обязательно для заполнения"),
    email: Yup.string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Неверный адрес электронной почты")
      .required("Обязательно для заполнения"),
  });

  const dispatch = useDispatch();

  const { email, phone } = useTypedSelector((store) => store.form.data);

  const navigate = useNavigate();

  return (
    <div>
      <User />
      <hr />
      <Formik
        validationSchema={SignupSchema}
        initialValues={{
          email,
          phone,
        }}
        onSubmit={(values: Values) => {
          dispatch(changeFields(values));
          navigate("/additional");
        }}
      >
        {({ errors, touched }) => (
          <Form className={cls.inputs_wrapper}>
            <Input
              labelText="Телефон"
              id="field-phone"
              name="phone"
              error={errors.phone}
              touched={touched.phone}
              children={({ field }) => (
                <InputMask
                  className={cls.input}
                  {...field}
                  mask="+7(999)999-99-99"
                  placeholder="+7(900)000-00-00"
                />
              )}
            />
            <Input
              name="email"
              labelText="Email"
              id="field-email"
              error={errors.email}
              touched={touched.email}
              placeholder="webstudio.fractal@example.com"
            />
            <Button
              id="button-start"
              style={{ marginTop: "20px" }}
              type="submit"
            >
              Начать
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
