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

export const DUMMY_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Enterprise Web Portal',
    slug: 'web-portal',
    category: 'WEB_APPS',
    summary: 'A next-generation enterprise gateway with real-time data streaming and AI-driven insights.',
    description: 'A next-generation enterprise gateway with real-time data streaming and AI-driven insights.',
    tags: ['TypeScript', 'Next.js', 'Django', 'WebSockets'],
    github_url: 'https://github.com/yusss4me',
    demo_url: 'https://demo.example.com',
    metrics: { Performance: '99/100', Uptime: '99.9%' },
    is_featured: true,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'AI Image & Vision Classifier',
    slug: 'ai-classifier',
    category: 'AI/ML',
    summary: 'Automated image recognition system built on custom neural architectures with high accuracy.',
    description: 'Automated image recognition system built on custom neural architectures with high accuracy.',
    tags: ['Python', 'PyTorch', 'FastAPI', 'OpenCV'],
    github_url: 'https://github.com/yusss4me',
    demo_url: null,
    metrics: { Accuracy: '99.4%', Latency: '45ms' },
    is_featured: true,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Spatial Sound Music Player',
    slug: 'music-player',
    category: 'FRONTEND/UI',
    summary: 'Minimalist audio application with spatial sound processing and dynamic glassmorphic UI.',
    description: 'Minimalist audio application with spatial sound processing and dynamic glassmorphic UI.',
    tags: ['Next.js', 'React', 'WebAudio API', 'TailwindCSS'],
    github_url: 'https://github.com/yusss4me',
    demo_url: 'https://music.example.com',
    metrics: { AudioFPS: '60', Buffering: '0ms' },
    is_featured: true,
    is_published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/projects/`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn(`API returned status ${res.status}: ${res.statusText}. Using fallback dummy projects.`);
      return DUMMY_PROJECTS;
    }

    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : DUMMY_PROJECTS;
  } catch (err) {
    console.warn('Network error or API failure fetching projects. Using fallback dummy projects:', err);
    return DUMMY_PROJECTS;
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

