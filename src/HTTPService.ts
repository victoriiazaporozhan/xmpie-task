import axios from 'axios';
import { AxiosResponse } from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (res): AxiosResponse => res,
  (err) => {
    throw err;
  },
);

export const GET = async (url: string): Promise<AxiosResponse> => {
  const response = await axiosInstance.get(url, {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'identity',
    },
  });

  return response.data;
};
