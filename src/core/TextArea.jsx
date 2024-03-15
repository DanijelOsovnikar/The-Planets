import "./TextArea.scss";

export default function TextArea({ planet, info }) {
  return (
    <div className="textArea">
      <h1>{planet.name}</h1>
      <p>{info.content}</p>
      <div className="source">
        <span>Source : </span>
        <a className="wikiLink" target="_blank" href={info.source}>
          Wikipedia
          <img
            src="src/assets/icon-source.svg"
            alt="sourceImg"
            className="sourceImg"
          />
        </a>
      </div>
    </div>
  );
}
