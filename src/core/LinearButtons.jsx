import "./LinearButtons.scss";

export default function LinearButtons({ buttonChange, colorName }) {
  const linearButtonHandler = (e) => {
    buttonChange(e.target.id);
  };

  return (
    <div className="linearButtons">
      <input
        type="radio"
        name="linear"
        id="overviewLinear"
        onClick={linearButtonHandler}
        defaultChecked
        hidden
      />
      <label className={colorName} htmlFor="overviewLinear">
        Overview
      </label>
      <input
        type="radio"
        name="linear"
        id="structureLinear"
        onClick={linearButtonHandler}
        hidden
      />
      <label className={colorName} htmlFor="structureLinear">
        Structure
      </label>
      <input
        type="radio"
        name="linear"
        id="geologyLinear"
        onClick={linearButtonHandler}
        hidden
      />
      <label className={colorName} htmlFor="geologyLinear">
        Surface
      </label>
    </div>
  );
}
