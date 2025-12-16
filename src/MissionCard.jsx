function MissionCard({ mission }) {
  return (
    <div className="mission-card">
      <h3>{mission.name}</h3>
      <p>
        <strong>Status:</strong> {mission.status}
      </p>
      <p>
        <strong>Crew:</strong> {mission.crew.join(", ")}
      </p>
    </div>
  );
}

export default MissionCard;
