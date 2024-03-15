import ImgSection from "../core/ImgSection";
import ButtonSection from "../core/ButtonSection";
import InfoSection from "../core/InfoSection";
import TextArea from "../core/TextArea";
import useSWR from "swr";
import { useState } from "react";
import "./Mars.scss";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Mars() {
  const [state, setState] = useState("overview");
  const [image, setImage] = useState("src/assets/planet-mars.svg");
  const [secondaryImage, setSecondaryImage] = useState(null);

  const buttonStateHandler = (e) => {
    setState(e);
    if (e === "overview") {
      setImage(planets[3].images.planet);
      setSecondaryImage(null);
    }
    if (e === "structure") {
      setImage(planets[3].images.internal);
      setSecondaryImage(null);
    }
    if (e === "geology") {
      setImage(planets[3].images.planet);
      setSecondaryImage(planets[3].images.geology);
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
    <div className="mars">
      <ImgSection image={image} secondaryImage={secondaryImage} />
      <div className="wrapper">
        <TextArea planet={planets[3]} info={planets[3][state]} />
        <ButtonSection
          buttonChange={buttonStateHandler}
          colorName={"redOrange"}
        />
      </div>
      <InfoSection planet={planets[3]} />
    </div>
  );
}
