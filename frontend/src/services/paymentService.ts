import { apiRequest, apiUrl, toFormUrlEncoded } from './api';
import { ProcessPaymentPayload, PaymentResponse } from '../types';

export const paymentService = {
  async processPayment(payload: ProcessPaymentPayload): Promise<PaymentResponse> {
    const body = toFormUrlEncoded(payload);
    return apiRequest<PaymentResponse>(apiUrl('/payment'), {
      method: 'POST',
      body,
    });
  },
};
