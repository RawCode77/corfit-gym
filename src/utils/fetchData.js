export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  try {
    const { json } = await fetch(url, options).then((response) => response.json());
    const data = json;
    return { json, data };
  } catch (error) {
    console.error('An error occurred while fetching the data:', error);
    // You can handle the error here, like showing an error message or retrying.
    throw error;
  }
};

