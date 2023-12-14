import { useEffect, useState } from "react";
import cls from "./EmptyPage.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "shared/ui/Button/Button";

export const EmptyPage = () => {
  const [counter, setCounter] = useState(5);

  const navigate = useNavigate();

  const toMainPage = () => {
    navigate("/credentials");
  };

  const reduceCounter = () => {
    setCounter((prev) => {
      if (prev === 0) {
        toMainPage();
        return 0;
      } else {
        return --prev;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(reduceCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cls.page}>
      <p className={cls.content}>
        Вы зашли на несуществующую страницу, вас перебросит на главную страницу
        через
      </p>
      <p className={cls.counter}>{counter}</p>
      <p className={cls.content}>Или вы можете перейти сразу</p>
      <Button onClick={toMainPage}>На главную</Button>
    </div>
  );
};
