export const AppRoutes = {
  HOME: '/',
  TASKS: '/tasks',
  FOLDERS: '/folders',
} as const;

export const AppRouteChildren = {
  TASKS: 'tasks',
  FOLDERS: 'folders',
} as const;

export type AppRouteKey = keyof typeof AppRoutes;
export type AppRoutePath = (typeof AppRoutes)[AppRouteKey];
