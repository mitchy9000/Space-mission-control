function MissionAction({ missionId, onStatusChange }) {
  return (
    <div className="mission-actions">
      <button onClick={() => onStatusChange(missionId, "Planned")}>
        Planned
      </button>
      <button onClick={() => onStatusChange(missionId, "Active")}>
        Active
      </button>
      <button onClick={() => onStatusChange(missionId, "Completed")}>
        Completed
      </button>
    </div>
  );
}

export default MissionAction;
