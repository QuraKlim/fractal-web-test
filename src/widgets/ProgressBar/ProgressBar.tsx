import cls from "./ProgressBar.module.scss";

interface ProgressBarProps {
  elements: JSX.Element[];
  currentElementIndex: number;
}

const CheckedCiricle = () => {
  return (
    <div className={cls.ciricle}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.6615 11.8737C7.56701 11.9987 7.41932 12.0723 7.26255 12.0723H6.68246C6.54732 12.0723 6.41794 12.0176 6.32379 11.9206L3.50416 9.01762C3.31572 8.8236 3.31572 8.51491 3.50416 8.32089L3.97576 7.83535C4.17213 7.63317 4.49672 7.63317 4.69309 7.83535L6.49492 9.69046C6.70848 9.91034 7.06779 9.88806 7.25254 9.64349L11.1512 4.48265C11.321 4.2579 11.6429 4.21769 11.8627 4.39375L12.3864 4.81309C12.5976 4.98226 12.6359 5.28881 12.4728 5.50476L7.6615 11.8737Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

const CurrentCiricle = () => (
  <div className={cls.ciricle}>
    <div className={cls.ciricle_inner}></div>
  </div>
);

const EmptyCiricle = () => <div className={cls.ciricle_empty}></div>;

export const ProgressBar = ({
  elements,
  currentElementIndex,
}: ProgressBarProps) => {
  return (
    <div className={cls.progress_bar}>
      <div className={cls.checks_wrap}>
        {elements.map((i, index) => (
          <div className="position-relative">
            {index + 1 < currentElementIndex ? (
              <CheckedCiricle />
            ) : index + 1 === currentElementIndex ? (
              <CurrentCiricle />
            ) : (
              <EmptyCiricle />
            )}
            <div className={cls.bar_number}>{index + 1}</div>
          </div>
        ))}
      </div>
      <div className={cls.progress_line_wrap}>
        <div
          className={cls.progress_line}
          style={{
            width: `${
              (currentElementIndex - 1) * (100 / (elements.length - 1))
            }%`,
          }}
        ></div>
      </div>
      <div className={cls.progress_line_wrap}>
        <div
          className={cls.progress_line + " " + cls.progress_line_empty}
        ></div>
      </div>
    </div>
  );
};
