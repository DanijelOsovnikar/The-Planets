import "./InfoSection.scss";

export default function InfoSection({ planet }) {
  return (
    <div className="infoSection">
      <div className="cube">
        <h4>Rotation Time</h4>
        <h2>{planet.rotation}</h2>
      </div>
      <div className="cube">
        <h4>Revolution Time</h4>
        <h2>{planet.revolution}</h2>
      </div>
      <div className="cube">
        <h4>Radius</h4>
        <h2>{planet.radius}</h2>
      </div>
      <div className="cube">
        <h4>Average Temp.</h4>
        <h2>{planet.temperature}</h2>
      </div>
    </div>
  );
}
