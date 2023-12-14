import cls from "./Modal.module.scss";

interface ModalProps {
  visible: boolean;
  header: JSX.Element;
  content: JSX.Element | null;
  footer: JSX.Element | null;
}

export const Modal = ({ visible, header, content, footer }: ModalProps) => {
  return (
    <div
      className={cls.modal_window}
      style={{ display: visible ? "flex" : "none" }}
    >
      <div className={cls.modal_background}></div>
      <div className={cls.modal_wrap}>
        <div className={cls.modal}>
          <div className="header w-100">{header}</div>
          {content}
          {footer}
        </div>
      </div>
    </div>
  );
};
