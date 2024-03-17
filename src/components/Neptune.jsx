import ImgSection from "../core/ImgSection";
import ButtonSection from "../core/ButtonSection";
import InfoSection from "../core/InfoSection";
import TextArea from "../core/TextArea";
import LinearButtons from "../core/LinearButtons";
import useSWR from "swr";
import { useState } from "react";
import "./Neptune.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Neptune() {
  const [state, setState] = useState("overview");
  const [image, setImage] = useState("src/assets/planet-neptune.svg");
  const [secondaryImage, setSecondaryImage] = useState(null);

  const buttonStateHandler = (e) => {
    if (e === "overviewLinear" || e === "overview") {
      setState("overview");
    }
    if (e === "structureLinear" || e === "structure") {
      setState("structure");
    }
    if (e === "geologyLinear" || e === "geology") {
      setState("geology");
    }
    if (e === "overview" || e === "overviewLinear") {
      setImage(planets[7].images.planet);
      setSecondaryImage(null);
    }
    if (e === "structure" || e === "structureLinear") {
      setImage(planets[7].images.internal);
      setSecondaryImage(null);
    }
    if (e === "geology" || e === "geologyLinear") {
      setImage(planets[7].images.planet);
      setSecondaryImage(planets[7].images.geology);
    }
  };

  const {
    data: planets,
    error,
    isValidating,
  } = useSWR("public/assets/data.json", fetcher);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className="neptune">
      <LinearButtons buttonChange={buttonStateHandler} colorName={"blue"} />
      <div className="upperSection">
        <ImgSection image={image} secondaryImage={secondaryImage} />
        <div className="wrapperNeptune">
          <TextArea planet={planets[7]} info={planets[7][state]} />
          <ButtonSection buttonChange={buttonStateHandler} colorName={"blue"} />
        </div>
      </div>
      <InfoSection planet={planets[7]} />
    </div>
  );
}
