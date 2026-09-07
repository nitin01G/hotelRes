import { apiRequest, apiUrl, toFormUrlEncoded } from './api';
import { ConfirmReservationPayload, ReservationResponse, ReservationItem, AvailabilityResponse } from '../types';

export const reservationService = {
  async checkAvailability(hotelId: number): Promise<AvailabilityResponse> {
    return apiRequest<AvailabilityResponse>(`${apiUrl('/reservations/availability')}?hotelId=${hotelId}`, {
      method: 'GET',
    });
  },

  async createReservation(payload: ConfirmReservationPayload): Promise<ReservationResponse> {
    const body = toFormUrlEncoded(payload);
    return apiRequest<ReservationResponse>(apiUrl('/reservations'), {
      method: 'POST',
      body,
    });
  },

  async getAllReservations(): Promise<ReservationItem[]> {
    return apiRequest<ReservationItem[]>(apiUrl('/reservations'), {
      method: 'GET',
    });
  },

  async cancelReservation(reservationId: string | number): Promise<{ success: boolean; message: string }> {
    const body = toFormUrlEncoded({ reservationId });
    return apiRequest<{ success: boolean; message: string }>(apiUrl('/reservations/cancel'), {
      method: 'POST',
      body,
    });
  },
};
