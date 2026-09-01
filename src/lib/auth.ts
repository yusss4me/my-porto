const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';

export interface TokenResponse {
  access: string;
  refresh: string;
}

export async function login(username: string, password: string): Promise<TokenResponse> {
  const res = await fetch(`${API_BASE_URL}/token/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData.detail || 'Access Denied: Invalid credentials provided to authentication core.'
    );
  }

  const data: TokenResponse = await res.json();

  if (typeof window !== 'undefined') {
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    document.cookie = `jwt_access=${data.access}; path=/; max-age=86400; SameSite=Lax`;
  }

  return data;
}

export function logout(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    document.cookie = 'jwt_access=; path=/; max-age=0';
    window.location.href = '/admin/login';
  }
}

export function getAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('access_token');
}

export function getRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('refresh_token');
}

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  const token = localStorage.getItem('access_token');
  return Boolean(token && token.length > 10);
}

export async function refreshAccessToken(): Promise<string | null> {
  const refresh = getRefreshToken();
  if (!refresh) return null;

  try {
    const res = await fetch(`${API_BASE_URL}/token/refresh/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh }),
    });

    if (!res.ok) return null;

    const data = await res.json();
    if (data.access && typeof window !== 'undefined') {
      localStorage.setItem('access_token', data.access);
      document.cookie = `jwt_access=${data.access}; path=/; max-age=86400; SameSite=Lax`;
      return data.access;
    }
  } catch (err) {
    console.error('Token refresh attempt failed:', err);
  }

  return null;
}

export async function authenticatedFetch(url: string, options: RequestInit = {}): Promise<Response> {
  let token = getAccessToken();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string>),
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  let response = await fetch(url, {
    ...options,
    headers,
  });

  // Auto Refresh Token on 401 Unauthorized
  if (response.status === 401) {
    const newToken = await refreshAccessToken();
    if (newToken) {
      headers['Authorization'] = `Bearer ${newToken}`;
      response = await fetch(url, {
        ...options,
        headers,
      });
    } else {
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/admin/login')) {
        logout();
      }
    }
  }

  return response;
}
