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
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['Guest'],
  tenantRoles: ['Inventory Manager', 'Inventory Clerk', 'Supply Chain Analyst', 'Finance Officer', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'Velocity Inventory',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read company information', 'Read user information'],
  ownerAbilities: [
    'Manage company information',
    'Edit user information',
    'Manage user-company relationships',
    'Manage user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/0097446a-67de-48b4-9185-86c9d31598d5',
};
