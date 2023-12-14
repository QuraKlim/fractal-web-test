export const Loading = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
        background: "rgb(255, 255, 255)",
        display: "block",
        shapeRendering: "auto",
        animationPlayState: "running",
        animationDelay: "0s",
      }}
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#5558fa"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
        style={{ animationPlayState: "running", animationDelay: "0s" }}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
          style={{ animationPlayState: "running", animationDelay: "0s" }}
        ></animateTransform>
      </circle>
    </svg>
  </div>
);
