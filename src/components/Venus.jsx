import ImgSection from "../core/ImgSection";
import ButtonSection from "../core/ButtonSection";
import InfoSection from "../core/InfoSection";
import TextArea from "../core/TextArea";
import LinearButtons from "../core/LinearButtons";
import useSWR from "swr";
import { useState } from "react";
import "./Venus.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Venus() {
  const [state, setState] = useState("overview");
  const [image, setImage] = useState("src/assets/planet-venus.svg");
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
      setImage(planets[1].images.planet);
      setSecondaryImage(null);
    }
    if (e === "structure" || e === "structureLinear") {
      setImage(planets[1].images.internal);
      setSecondaryImage(null);
    }
    if (e === "geology" || e === "geologyLinear") {
      setImage(planets[1].images.planet);
      setSecondaryImage(planets[1].images.geology);
    }
  };

  const {
    data: planets,
    error,
    isValidating,
  } = useSWR("assets/data.json", fetcher);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className="venus">
      <LinearButtons buttonChange={buttonStateHandler} colorName={"yellow"} />
      <div className="upperSection">
        <ImgSection image={image} secondaryImage={secondaryImage} />
        <div className="wrapperVenus">
          <TextArea planet={planets[1]} info={planets[1][state]} />
          <ButtonSection
            buttonChange={buttonStateHandler}
            colorName={"yellow"}
          />
        </div>
      </div>
      <InfoSection planet={planets[1]} />
    </div>
  );
}
