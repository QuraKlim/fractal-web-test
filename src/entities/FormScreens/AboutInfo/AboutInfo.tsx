import cls from "../styles/InfoScreensStyles.module.scss";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { sendData } from "features/slice/formSlice";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useTypedSelector } from "shared/libs/hooks/useTypedSelector";
import { useAppDispatch } from "app/providers/StoreProvider/ui/StoreProvider";

export type AboutInfoProps = {
  onClickPrev: () => void;
};

export type Values = {
  about: string;
};

export const AboutInfo = ({ onClickPrev }: AboutInfoProps) => {
  const dispatch = useAppDispatch();

  const AboutSchema = Yup.object().shape({
    about: Yup.string()
      .max(200, "Слишком длинное описание")
      .min(3, "Слишком короткое описание")
      .required("Обязательно для заполнения"),
  });

  const { about } = useTypedSelector((store) => store.form.data);

  return (
    <div>
      <Formik
        validationSchema={AboutSchema}
        initialValues={{
          about,
        }}
        onSubmit={(values: Values) => {
          dispatch(sendData(values));
        }}
      >
        {({ errors, touched, values }) => (
          <Form className={cls.inputs_wrapper}>
            <Input
              labelText="О себе"
              id="field-about"
              name="about"
              as="textarea"
              error={errors.about}
              touched={touched.about}
            />
            <div className={cls.counter}>
              {values.about.replace(/ /g, "").length} симоволов (максимум 200)
            </div>
            <div className={cls.button_group}>
              <Button onClick={onClickPrev} id="button-back" outline={true}>
                Назад
              </Button>
              <Button id="button-send" type="submit">
                Отправить
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
