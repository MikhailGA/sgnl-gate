export const AppRoutes = {
  HOME: '/',
  FOLDERS: '/folders',
  FILES: '/files',
} as const;

export const AppRouteChildren = {
  FOLDERS: 'folders',
  FILES: 'files',
} as const;

export type AppRouteKey = keyof typeof AppRoutes;
export type AppRoutePath = (typeof AppRoutes)[AppRouteKey];
