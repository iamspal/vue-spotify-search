import fetchInstance from '../../fetchInstance';

const baseUrl = process.env.VUE_APP_CATALOG_ENDPOINT;

// Search tracks, artists, albums on spotify API
const searchCatalog = async (query) => {
  const url = `${baseUrl}?q=${query}`;
  try {
    const response = await fetchInstance(url);
    if (!response.ok) throw await response.json();
    const json = await response.json();
    return [null, json];
  } catch (error) {
    return [error];
  }
};

export default searchCatalog;
