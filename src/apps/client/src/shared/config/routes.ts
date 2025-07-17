export const AppRoutes = {
  HOME: '/',
  FOLDERS: '/folders',
} as const;

export const AppRouteChildren = {
  FOLDERS: 'folders',
} as const;

export type AppRouteKey = keyof typeof AppRoutes;
export type AppRoutePath = (typeof AppRoutes)[AppRouteKey];
