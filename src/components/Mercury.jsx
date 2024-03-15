import ImgSection from "../core/ImgSection";
import ButtonSection from "../core/ButtonSection";
import InfoSection from "../core/InfoSection";
import TextArea from "../core/TextArea";
import useSWR from "swr";
import { useState } from "react";
import "./Mercury.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Mercury() {
  const [state, setState] = useState("overview");
  const [image, setImage] = useState("src/assets/planet-mercury.svg");
  const [secondaryImage, setSecondaryImage] = useState(null);

  const buttonStateHandler = (e) => {
    setState(e);
    if (e === "overview") {
      setImage(planets[0].images.planet);
      setSecondaryImage(null);
    }
    if (e === "structure") {
      setImage(planets[0].images.internal);
      setSecondaryImage(null);
    }
    if (e === "geology") {
      setImage(planets[0].images.planet);
      setSecondaryImage(planets[0].images.geology);
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
    <div className="venus">
      <ImgSection image={image} secondaryImage={secondaryImage} />
      <div className="wrapper">
        <TextArea planet={planets[0]} info={planets[0][state]} />
        <ButtonSection buttonChange={buttonStateHandler} colorName={"cyan"} />
      </div>
      <InfoSection planet={planets[0]} />
    </div>
  );
}
