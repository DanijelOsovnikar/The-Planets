import { useState } from "react";
import "./ImgSection.scss";

export default function ImgSection({ image, secondaryImage }) {
  return (
    <div className="imgSection">
      <img src={image} alt="img" style={{ maxWidth: "31rem" }} />
      <img
        className="secondImage"
        src={secondaryImage}
        style={{
          background: "transparent",
          position: "absolute",
          transform: "scale(0.5)",
        }}
      />
    </div>
  );
}
