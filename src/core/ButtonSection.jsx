import "./ButtonSection.scss";

export default function ButtonSection({ buttonChange }) {
  const buttonHandler = (e) => {
    buttonChange(e.target.id);
  };

  return (
    <div className="buttonSection">
      <input
        type="radio"
        name="select"
        id="overview"
        onClick={buttonHandler}
        defaultChecked
        hidden
      />
      <label id="overview" htmlFor="overview">
        <span>01</span>Overview
      </label>
      <input
        type="radio"
        name="select"
        id="structure"
        onClick={buttonHandler}
        hidden
      />
      <label htmlFor="structure">
        <span>02</span>Internal Structure
      </label>
      <input
        type="radio"
        name="select"
        id="geology"
        onClick={buttonHandler}
        hidden
      />
      <label htmlFor="geology">
        <span>03</span>Surface Geology
      </label>
    </div>
  );
}
