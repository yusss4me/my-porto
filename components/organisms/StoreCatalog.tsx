import React from 'react';
import ClientStoreCatalog from './ClientStoreCatalog';
import { getProjects, Project } from '@/src/lib/api';

interface StoreCatalogProps {
  category?: string;
  isSearchOpen?: boolean;
}

export default async function StoreCatalog({ category, isSearchOpen }: StoreCatalogProps) {
  let initialProjects: Project[] | null = null;
  let isApiError = false;

  try {
    initialProjects = await getProjects();
  } catch (error) {
    console.error('Failed to fetch dynamic projects from Django backend:', error);
    isApiError = true;
  }

  return (
    <ClientStoreCatalog
      category={category}
      isSearchOpen={isSearchOpen}
      initialProjects={initialProjects}
      isApiError={isApiError}
    />
  );
}



