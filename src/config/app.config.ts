interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Uplift',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage application', 'Manage freelancer_profile', 'Read job', 'Read company'],
  ownerAbilities: ['Manage hiring data', 'Manage user data', 'Manage company data', 'Manage job data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/85044197-a1eb-4d84-9113-22c8668f691e',
};
