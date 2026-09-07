import { apiRequest, apiUrl } from './api';
import { Hotel } from '../types';

export const hotelService = {
  async getHotels(): Promise<Hotel[]> {
    return apiRequest<Hotel[]>(apiUrl('/hotels'), {
      method: 'GET',
    });
  },

  async getHotelById(id: number): Promise<Hotel> {
    return apiRequest<Hotel>(`${apiUrl('/hotels')}?id=${id}`, {
      method: 'GET',
    });
  },
};
