import axios from "axios";
import { ShortURL } from "../types/ShortURL";

const config = {
  headers: {
    accept: "application/json",
    apikey: "25d6e1c2b66a46cfae0969d145dafc4d",
  },
};

export const fetchUrl = (url: FormDataEntryValue) => {
  return axios.post<ShortURL>(
    `https://api.rebrandly.com/v1/links`,
    { destination: url },
    config
  );
};
