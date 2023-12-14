type PlusPropsType = {
  id: string;
  classNames: string;
  onClick: () => void;
};

export const Plus = ({ id, classNames, onClick }: PlusPropsType) => (
  <div className={classNames} id={id} onClick={onClick}>
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="0.75"
        width="42.5"
        height="42.5"
        rx="3.25"
        stroke="#5558FA"
        stroke-width="1.5"
      />
      <path
        d="M23 17C23 16.4477 22.5523 16 22 16C21.4477 16 21 16.4477 21 17V21H17C16.4477 21 16 21.4477 16 22C16 22.5523 16.4477 23 17 23H21V27C21 27.5522 21.4477 28 22 28C22.5523 28 23 27.5522 23 27V23H27C27.5522 23 28 22.5523 28 22C28 21.4477 27.5522 21 27 21H23V17Z"
        fill="#5558FA"
      />
    </svg>
  </div>
);
