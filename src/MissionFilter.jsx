function MissionFilter({ currentFilter, onFilterChange }) {
  const filters = ["ALL", "Planned", "Active", "Completed"];

  return (
    <div className="mission-filter">
      <span>Filter:</span>
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={currentFilter === filter ? "active" : ""}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default MissionFilter;
