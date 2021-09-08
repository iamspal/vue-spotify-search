import fetchInstance from '../../fetchInstance';

const baseUrl = process.env.APP_API_ENDPOINT;

// Search tracks, artists, albums on spotify API
const searchCatalog = async (query) => {
  const url = `${baseUrl}?q=${query}`;
  try {
    const response = await fetchInstance(url);
    if (!response.ok) throw await response.json();
    return [null, await response.json()];
  } catch (error) {
    return [error];
  }
};

export default searchCatalog;
