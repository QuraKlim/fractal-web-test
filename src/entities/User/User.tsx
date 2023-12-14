import cls from "./User.module.scss";
import photo from "shared/assets/images/photo.jpeg";

export const User = () => {
  return (
    <div className={cls.user_wrapper}>
      <div className={cls.user_photo}>
        <img alt="user" src={photo} />
      </div>
      <div>
        <div className={`header ${cls.name}`}>Климов Юрий</div>
        <div className={cls.user_links}>
          <a
            target="_blank"
            className={cls.user_link}
            href="https://t.me/QuraKlim"
            rel="noreferrer"
          >
            Telegram
          </a>
          <a
            target="_blank"
            className={cls.user_link}
            href="https://github.com/QuraKlim"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            target="_blank"
            className={cls.user_link}
            href="https://hh.ru/resume/0bb0cfcbff0950e5430039ed1f6a6274435872"
            rel="noreferrer"
          >
            Резюме
          </a>
        </div>
      </div>
    </div>
  );
};
