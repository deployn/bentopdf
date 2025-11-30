declare const __BASE_URL__: string;

export const getBaseUrl = (): string => {
  return __BASE_URL__;
};

/**
 * Get the full URL path for a given relative path
 * @param path - The relative path (e.g., 'about.html', 'src/pages/bookmark.html')
 * @returns The full path including the base URL
 */
export const getFullPath = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${__BASE_URL__}${cleanPath}`;
};

export const navigateToHome = (): void => {
  window.location.href = getBaseUrl();
};

export const getHomeUrl = (): string => {
  return getBaseUrl();
};
