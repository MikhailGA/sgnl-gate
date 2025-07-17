export const AppRoutes = {
  HOME: '/',
  TASKS: '/tasks',
} as const;

export const AppRouteChildren = {
  TASKS: 'tasks',
} as const;

export type AppRouteKey = keyof typeof AppRoutes;
export type AppRoutePath = (typeof AppRoutes)[AppRouteKey];
