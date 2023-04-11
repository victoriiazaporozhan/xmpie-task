import { AxiosResponse } from 'axios';
import { GET } from '../HTTPService.ts';

export const searchImages = (query: string): Promise<AxiosResponse> => {
  const queryString = `https://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${query}`;

  const response = GET(queryString);
  return response;
}
