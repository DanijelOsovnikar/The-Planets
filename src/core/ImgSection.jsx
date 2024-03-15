import "./ImgSection.scss";

export default function ImgSection({ image }) {
  return (
    <div className="imgSection">
      {image === "src/assets/geology-mercury.png" ? (
        <img src="src/assets/planet-mercury.svg" alt="coreImg" />
      ) : (
        <img src={image} alt="img" />
      )}
      {image === "src/assets/geology-mercury.png" ? (
        <img
          src={image}
          alt="altImg"
          style={{
            background: "transparent",
            position: "absolute",
            transform: "scale(0.5)",
            top: "200px",
          }}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}
