import { useMemo, useState } from "react";
import MissionCard from "./MissionCard";
import MissionAction from "./MissionAction";
import MissionFilter from "./MissionFilter";

function MissionControl({ missions }) {
  const [missionList, setMissionList] = useState(missions);
  const [filterStatus, setFilterStatus] = useState("ALL");

  const updateMissionStatus = (missionId, newStatus) => {
    setMissionList(prev =>
      prev.map(mission =>
        mission.id === missionId
          ? { ...mission, status: newStatus }
          : mission
      )
    );
  };

  const filteredMissions = useMemo(() => {
    if (filterStatus === "ALL") return missionList;
    return missionList.filter(
      mission => mission.status === filterStatus
    );
  }, [missionList, filterStatus]);

  return (
    <div className="mission-control">
      <h1>🚀 Mission Control</h1>

      <MissionFilter
        currentFilter={filterStatus}
        onFilterChange={setFilterStatus}
      />

      <div className="mission-list">
        {filteredMissions.map(mission => (
          <div key={mission.id} className="mission-item">
            <MissionCard mission={mission} />
            <MissionAction
              missionId={mission.id}
              onStatusChange={updateMissionStatus}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionControl;
