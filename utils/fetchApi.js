import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "028f63a1e5msh9154cc9cf34e448p17262fjsn1d54a5a2ec91",
    },
  });

  return data;
};
