import { PrimaryInfo } from "entities/FormScreens/PrimaryInfo/PrimaryInfo";
import cls from "./AdditionalInfoScreen.module.scss";

import { useEffect, useState } from "react";
import { SecondaryInfo } from "entities/FormScreens/SecondaryInfo/SecondaryInfo";
import { AboutInfo } from "entities/FormScreens/AboutInfo/AboutInfo";
import { ProgressBar } from "widgets/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "shared/libs/hooks/useTypedSelector";
import { Modal } from "widgets/Modal/Modal";
import {
  ERequestStatus,
  cleanStore,
  resetStatus,
} from "features/slice/formSlice";
import { Loading } from "shared/assets/icons/loading";
import { Button } from "shared/ui/Button/Button";
import { ErrorIcon, StatusIcon } from "widgets/StatusIcon/StatusIcon";
import { useAppDispatch } from "app/providers/StoreProvider/ui/StoreProvider";
interface IModalData {
  status: ERequestStatus | null;
  header: JSX.Element;
  content: JSX.Element | null;
  footer: JSX.Element | null;
}

export const AdditionalInfoScreen = () => {
  const [screenNumber, setScreenNumber] = useState(1);
  const requestStatus = useTypedSelector((store) => store.form.request.status);

  const [modalData, setModalData] = useState<IModalData>({
    status: requestStatus,
    header: <></>,
    content: null,
    footer: null,
  });

  useEffect(() => {
    console.log("status changed" + requestStatus);
    if (requestStatus === ERequestStatus.LOADING) {
      setModalData({
        status: requestStatus,
        header: <>Отправка формы, подождите...</>,
        content: <Loading />,
        footer: null,
      });
    } else if (requestStatus === ERequestStatus.SUCCESS) {
      setModalData({
        status: requestStatus,
        header: <>Форма успешно отправлена</>,
        content: <StatusIcon className="success" />,
        footer: (
          <Button
            id="button-to-main"
            children="На главную"
            onClick={toMainPageOnSuccess}
          />
        ),
      });
    } else if (requestStatus === ERequestStatus.ERROR) {
      setModalData({
        status: requestStatus,
        header: (
          <div className={cls.modal_header}>
            <div>Ошибка</div>
            <div className={cls.close_button} onClick={resetRequestStatus}>
              <ErrorIcon width={20} height={20} />
            </div>
          </div>
        ),
        content: <StatusIcon className="error" />,
        footer: (
          <Button
            id="button-close"
            children="Закрыть"
            onClick={resetRequestStatus}
          />
        ),
      });
    } else {
      setModalData({
        status: null,
        header: <></>,
        content: null,
        footer: null,
      });
    }
  }, [requestStatus]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const nextScreen = () => {
    setScreenNumber((prev) => prev + 1);
  };

  const prevScreen = () => {
    setScreenNumber((prev) => prev - 1);
  };

  const toMainPage = () => {
    navigate("/credentials");
  };

  const toMainPageOnSuccess = () => {
    dispatch(cleanStore());
    toMainPage();
  };

  const resetRequestStatus = () => {
    dispatch(resetStatus());
  };

  const screens = [
    <PrimaryInfo onClickNext={nextScreen} onClickPrev={toMainPage} />,
    <SecondaryInfo onClickNext={nextScreen} onClickPrev={prevScreen} />,
    <AboutInfo onClickPrev={prevScreen} />,
  ];

  return (
    <div>
      <ProgressBar elements={screens} currentElementIndex={screenNumber} />
      <div className={cls.screen_content}>
        {screens.find((i, index) => index + 1 >= screenNumber)}
      </div>
      <Modal
        visible={Boolean(modalData.status)}
        header={modalData.header}
        content={modalData.content}
        footer={modalData.footer}
      />
    </div>
  );
};
