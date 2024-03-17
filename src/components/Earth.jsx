import ImgSection from "../core/ImgSection";
import ButtonSection from "../core/ButtonSection";
import InfoSection from "../core/InfoSection";
import TextArea from "../core/TextArea";
import LinearButtons from "../core/LinearButtons";
import useSWR from "swr";
import { useState } from "react";
import "./Earth.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Earth() {
  const [state, setState] = useState("overview");
  const [image, setImage] = useState("src/assets/planet-earth.svg");
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
      setImage(planets[2].images.planet);
      setSecondaryImage(null);
    }
    if (e === "structure" || e === "structureLinear") {
      setImage(planets[2].images.internal);
      setSecondaryImage(null);
    }
    if (e === "geology" || e === "geologyLinear") {
      setImage(planets[2].images.planet);
      setSecondaryImage(planets[2].images.geology);
    }
  };

  const {
    data: planets,
    error,
    isValidating,
  } = useSWR("../data.json", fetcher);

  if (error) return <div className="failed">failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  return (
    <div className="earth">
      <LinearButtons buttonChange={buttonStateHandler} colorName={"purple"} />
      <div className="upperSection">
        <ImgSection image={image} secondaryImage={secondaryImage} />
        <div className="wrapperEarth">
          <TextArea planet={planets[2]} info={planets[2][state]} />
          <ButtonSection
            buttonChange={buttonStateHandler}
            colorName={"purple"}
          />
        </div>
      </div>
      <InfoSection planet={planets[2]} />
    </div>
  );
}
