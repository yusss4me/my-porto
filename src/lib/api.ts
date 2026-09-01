export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  github_url: string | null;
  demo_url: string | null;
  metrics?: Record<string, any> | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id?: number;
  sender_name: string;
  sender_email: string;
  subject?: string;
  message_body: string;
  is_read?: boolean;
  created_at?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn(`API returned status ${res.status}: ${res.statusText}`);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.warn('Network error or API failure fetching projects:', err);
    return [];
  }
}

export async function sendContactMessage(data: ContactMessage): Promise<ContactMessage> {
  let res = await fetch(`${API_BASE_URL}/inbox/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok && res.status === 404) {
    // Fallback to /contact/ if /inbox/ route is configured under contact endpoint
    res = await fetch(`${API_BASE_URL}/contact/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      errorData.detail ||
        (errorData.sender_email ? `Email error: ${errorData.sender_email.join(', ')}` : null) ||
        `Failed to send contact message: ${res.status} ${res.statusText}`
    );
  }

  return res.json();
}

