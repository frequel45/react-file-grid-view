
export const fetchClusters = async (collectionId, page = 1, filters = []) => {
  if(!collectionId) {
    throw new Error('Collection ID is required to fetch clusters')
  }
  const query = filters.length ? filters.join(',') : 'random'; 

  
  const response = await axios.get(`https://api.unsplash.com/collections/${collectionId}/photos`, {
    params: {
      query,  
      page,   
      per_page: 30,  
    },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,  
    },
  });

  return response.data; 
};


export const fetchImages = async (collectionId, page = 1, filters = []) => {
  if(!collectionId) {
    throw new Error('Collection ID is required to fetch clusters')
  }
  const query = filters.length ? filters.join(',') : 'random'; 

  
  const response = await axios.get(`https://api.unsplash.com/collections/${collectionId}/photos`, {
    params: {
      query,  
      page,   
      per_page: 30,  
    },
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,  
    },
  });

  return response.data; 
};