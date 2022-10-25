import Axios from "axios";

const baseURL = "https://swapi.dev/api/";
export const Client = async (params) => {
  const { path, method, data } = params;

  let url = `${baseURL}${path}`;
  const requestBody = {
    method,
    url,
    data: JSON.stringify(data),
    responseType: "json"
  };

  try {
    const response = await Axios(requestBody);
    const result = response;
    return result;
  } catch (error) {
    throw error;
  }
};
