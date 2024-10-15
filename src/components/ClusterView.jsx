import React, { useState, useEffect } from 'react';
import { fetchClusters } from '../api/imageApi';


const ClusterView = () => {
  
  const [clusters, setClusters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const loadClusters = async () => {
      try {
        const fetchedClusters = await fetchClusters('317099'); 
        setClusters(fetchedClusters);
        setLoading(false); 
      } catch (err) {
        setError('Failed to load clusters');
        setLoading(false); 
      }
    };

    loadClusters(); 
  }, []); 
  if (loading) {
    return <div>Loading...</div>;  
  }

  if (error) {
    return <div>{error}</div>; 
  }
  const onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
  
    if (clientHeight + scrollTop >= scrollHeight - 20 && !loading) {
      setPage((prev) => prev + 1); 
    }
  };

  
  return (
    <div onScroll={onScroll}>
      {clusters.map((cluster, index) => (
        <div key={index}>
          <img src={cluster.urls.thumb} alt={cluster.alt_description} />
          <p>{cluster.description || 'No description available'}</p>
        </div>
      ))}
    </div>
  );
};

export default ClusterView;
