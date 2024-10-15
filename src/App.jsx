import React, { useState } from "react";
import FileGridView from "./components/FileGridView.jsx";
import ClusterView from "./components/ClusterView.jsx";
import FilterBar from "./components/FilterBar.jsx";

function App() {
  const [view, setView] = useState("files"); // Toggle between 'files' and 'clusters'
  const [filters, setFilters] = useState([]);

  return (
    <div className="app">
      <h1>Image Grid Viewer</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <div className="view-toggle">
        <button onClick={() => setView("files")}>Files View</button>
        <button onClick={() => setView("clusters")}>Cluster View</button>
      </div>
      {view === "files" ? (
        <FileGridView filters={filters} />
      ) : (
        <ClusterView filters={filters} />
       //<LoadClusters />
      )}
    </div>
  );
}

export default App;
