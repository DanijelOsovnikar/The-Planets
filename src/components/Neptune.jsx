import ImgSection from "../core/ImgSection";
import ButtonSection from "../core/ButtonSection";
import InfoSection from "../core/InfoSection";
import TextArea from "../core/TextArea";
import useSWR from "swr";
import { useState } from "react";
import "./Neptune.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Neptune() {
  const [state, setState] = useState("overview");
  const [image, setImage] = useState("src/assets/planet-neptune.svg");
  const [secondaryImage, setSecondaryImage] = useState(null);

  const buttonStateHandler = (e) => {
    setState(e);
    if (e === "overview") {
      setImage(planets[7].images.planet);
      setSecondaryImage(null);
    }
    if (e === "structure") {
      setImage(planets[7].images.internal);
      setSecondaryImage(null);
    }
    if (e === "geology") {
      setImage(planets[7].images.planet);
      setSecondaryImage(planets[7].images.geology);
    }
  };

  const {
    data: planets,
    error,
    isValidating,
  } = useSWR("src/data.json", fetcher);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className="neptune">
      <ImgSection image={image} secondaryImage={secondaryImage} />
      <div className="wrapper">
        <TextArea planet={planets[7]} info={planets[7][state]} />
        <ButtonSection buttonChange={buttonStateHandler} colorName={"blue"} />
      </div>
      <InfoSection planet={planets[7]} />
    </div>
  );
}
