import { apiRequest, apiUrl, toFormUrlEncoded } from './api';
import { User } from '../types';

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

export interface SessionResponse {
  authenticated: boolean;
  user?: User;
}

export const authService = {
  async login(email: string, password: string): Promise<AuthResponse> {
    const body = toFormUrlEncoded({
      action: 'login',
      email,
      password,
    });
    return apiRequest<AuthResponse>(apiUrl('/auth'), {
      method: 'POST',
      body,
    });
  },

  async signup(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }): Promise<AuthResponse> {
    const body = toFormUrlEncoded({
      action: 'signup',
      ...data,
    });
    return apiRequest<AuthResponse>(apiUrl('/auth'), {
      method: 'POST',
      body,
    });
  },

  async checkSession(): Promise<SessionResponse> {
    try {
      return await apiRequest<SessionResponse>(apiUrl('/auth'), {
        method: 'GET',
      });
    } catch {
      return { authenticated: false };
    }
  },

  async logout(): Promise<AuthResponse> {
    const body = toFormUrlEncoded({ action: 'logout' });
    return apiRequest<AuthResponse>(apiUrl('/auth'), {
      method: 'POST',
      body,
    });
  },
};
