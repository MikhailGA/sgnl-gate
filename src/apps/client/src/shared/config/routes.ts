export const AppRoutes = {
  HOME: '/',
  ANALYTICS: '/analytics',
  CLIENTS: '/clients',
  TASKS: '/tasks',
} as const;

export const AppRouteChildren = {
  ANALYTICS: 'analytics',
  CLIENTS: 'clients',
  TASKS: 'tasks',
} as const;

export type AppRouteKey = keyof typeof AppRoutes;
export type AppRoutePath = (typeof AppRoutes)[AppRouteKey];
