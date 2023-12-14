import cls from "./StatusIcon.module.scss";

export interface StatusIconProps {
  className: "success" | "error";
}

export interface IIconProps {
  width: number;
  height: number;
}

export const CheckIcon = ({ width, height }: IIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.6615 11.8737C7.56701 11.9987 7.41932 12.0723 7.26255 12.0723H6.68246C6.54732 12.0723 6.41794 12.0176 6.32379 11.9206L3.50416 9.01762C3.31572 8.8236 3.31572 8.51491 3.50416 8.32089L3.97576 7.83535C4.17213 7.63317 4.49672 7.63317 4.69309 7.83535L6.49492 9.69046C6.70848 9.91034 7.06779 9.88806 7.25254 9.64349L11.1512 4.48265C11.321 4.2579 11.6429 4.21769 11.8627 4.39375L12.3864 4.81309C12.5976 4.98226 12.6359 5.28881 12.4728 5.50476L7.6615 11.8737Z"
      fill="white"
    />
  </svg>
);

export const ErrorIcon = ({ width, height }: IIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="white"
    stroke="currentColor"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const StatusIcon = ({ className }: StatusIconProps) => {
  return (
    <div
      style={
        className === "success"
          ? { backgroundColor: "#05AE7126" }
          : { backgroundColor: "#E84E5826" }
      }
      className={cls.status_outer_icon + " " + className}
    >
      <div
        style={
          className === "success"
            ? { backgroundColor: "#05AE71" }
            : { backgroundColor: "#E84E58" }
        }
        className={cls.status_inner_icon + " " + className}
      >
        {className === "success" ? (
          <CheckIcon width={35} height={35} />
        ) : (
          <ErrorIcon width={35} height={35} />
        )}
      </div>
    </div>
  );
};
