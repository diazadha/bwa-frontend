import axios from "axios";

import errorHandler from "./errorHandler";

const baseUrl = process.env.NEXT_PUBLIC_API_HOST;
const instance = axios.create({
  baseURL: `${baseUrl}`,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
