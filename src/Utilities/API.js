const baseUrl= 'https://api.nasa.gov/planetary/apod';
    const api_key= process.env.REACT_APP_GOVT_API_KEY;
    
export const APOD = () => {
       return fetch(`${baseUrl}?api_key=${api_key}`)
  };
