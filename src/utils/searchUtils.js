import {unsplashCredentials} from '../secrets.js';

export const searchUsers = async (query) => {
  try {
    const req_url = 'https://api.unsplash.com/search/users?per_page=50&query=' + query;
    const response = await fetch(req_url, {
      method: 'GET',
      headers: {
        Authorization: 'Client-ID ' + unsplashCredentials.access_key,
      }
    });
    const res = await response.json();

    return res.results;
  } catch(error) {
    console.log("ERROR IN searchUsers()");
    console.error(error)
    return null;
  }
}
