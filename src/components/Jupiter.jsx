import ImgSection from "../core/ImgSection";
import ButtonSection from "../core/ButtonSection";
import InfoSection from "../core/InfoSection";
import TextArea from "../core/TextArea";
import useSWR from "swr";
import { useState } from "react";
import "./Jupiter.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Jupiter() {
  const [state, setState] = useState("overview");
  const [image, setImage] = useState("src/assets/planet-jupiter.svg");
  const [secondaryImage, setSecondaryImage] = useState(null);

  const buttonStateHandler = (e) => {
    setState(e);
    if (e === "overview") {
      setImage(planets[4].images.planet);
      setSecondaryImage(null);
    }
    if (e === "structure") {
      setImage(planets[4].images.internal);
      setSecondaryImage(null);
    }
    if (e === "geology") {
      setImage(planets[4].images.planet);
      setSecondaryImage(planets[4].images.geology);
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
    <div className="jupiter">
      <ImgSection image={image} secondaryImage={secondaryImage} />
      <div className="wrapper">
        <TextArea planet={planets[4]} info={planets[4][state]} />
        <ButtonSection buttonChange={buttonStateHandler} colorName={"red"} />
      </div>
      <InfoSection planet={planets[4]} />
    </div>
  );
}
