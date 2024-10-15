import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  };

  return (
    <div className="filter-bar">
      <label>
        <input
          type="checkbox"
          value="car"
          checked={filters.includes("car")}
          onChange={handleFilterChange}
        />
        Car
      </label>
      <label>
        <input
          type="checkbox"
          value="person"
          checked={filters.includes("person")}
          onChange={handleFilterChange}
        />
        Person
      </label>
    </div>
  );
};

export default FilterBar;
