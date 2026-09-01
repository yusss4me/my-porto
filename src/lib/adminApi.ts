import { authenticatedFetch } from './auth';
import { Project, ContactMessage } from './api';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api/v1';

export type ProjectInput = Partial<Omit<Project, 'id' | 'created_at' | 'updated_at'>>;

export async function adminGetProjects(): Promise<Project[]> {
  const res = await authenticatedFetch(`${API_BASE_URL}/projects/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch projects: ${res.statusText}`);
  }
  return res.json();
}

export async function adminCreateProject(projectData: ProjectInput): Promise<Project> {
  const res = await authenticatedFetch(`${API_BASE_URL}/projects/`, {
    method: 'POST',
    body: JSON.stringify(projectData),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || JSON.stringify(errorData) || 'Failed to create project');
  }

  return res.json();
}

export async function adminUpdateProject(id: number, projectData: ProjectInput): Promise<Project> {
  const res = await authenticatedFetch(`${API_BASE_URL}/projects/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify(projectData),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.detail || JSON.stringify(errorData) || 'Failed to update project');
  }

  return res.json();
}

export async function adminDeleteProject(id: number): Promise<void> {
  const res = await authenticatedFetch(`${API_BASE_URL}/projects/${id}/`, {
    method: 'DELETE',
  });

  if (!res.ok && res.status !== 204) {
    throw new Error(`Failed to delete project #${id}: ${res.statusText}`);
  }
}

export async function adminGetMessages(): Promise<ContactMessage[]> {
  const res = await authenticatedFetch(`${API_BASE_URL}/messages/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Failed to fetch contact messages: ${res.statusText}`);
  }
  return res.json();
}

export async function adminMarkMessageRead(id: number, isRead: boolean = true): Promise<ContactMessage> {
  const res = await authenticatedFetch(`${API_BASE_URL}/messages/${id}/`, {
    method: 'PATCH',
    body: JSON.stringify({ is_read: isRead }),
  });

  if (!res.ok) {
    throw new Error(`Failed to update message status #${id}: ${res.statusText}`);
  }

  return res.json();
}

export async function adminDeleteMessage(id: number): Promise<void> {
  const res = await authenticatedFetch(`${API_BASE_URL}/messages/${id}/`, {
    method: 'DELETE',
  });

  if (!res.ok && res.status !== 204) {
    throw new Error(`Failed to delete message #${id}: ${res.statusText}`);
  }
}
