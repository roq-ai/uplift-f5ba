const mapping: Record<string, string> = {
  applications: 'application',
  companies: 'company',
  'freelancer-profiles': 'freelancer_profile',
  hirings: 'hiring',
  jobs: 'job',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
