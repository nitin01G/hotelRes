/**
 * Centralized API Client Wrapper
 * Guarantees proper headers, session credentials inclusion, and error formatting.
 */

export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const defaultHeaders: Record<string, string> = {
    'Accept': 'application/json',
  };

  if (!(options.body instanceof FormData)) {
    defaultHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  const config: RequestInit = {
    ...options,
    credentials: 'include', // Send Tomcat JSESSIONID cookies
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const contentType = response.headers.get('content-type');

    let data: any;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }
    }

    if (!response.ok) {
      const errorMessage = data?.message || data?.error || `HTTP ${response.status}: ${response.statusText}`;
      console.error(`[API Error] ${config.method || 'GET'} ${url} ->`, response.status, data);
      throw new Error(errorMessage);
    }

    return data as T;
  } catch (error: any) {
    console.error(`[Network/API Failure] ${config.method || 'GET'} ${url} ->`, error);
    throw error;
  }
}

// Vite replaces BASE_URL in production with the configured application base.
// It deliberately contains no host so the API is always requested from the
// deployed Tomcat application, preserving the JSESSIONID session cookie.
export const apiUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/api${path}`;
};

export function toFormUrlEncoded(data: Record<string, any>): string {
  const params = new URLSearchParams();
  for (const key in data) {
    if (data[key] !== undefined && data[key] !== null) {
      params.append(key, String(data[key]));
    }
  }
  return params.toString();
}
