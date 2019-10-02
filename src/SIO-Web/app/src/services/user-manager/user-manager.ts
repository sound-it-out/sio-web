import { UserManager, User } from 'oidc-client';
import configuration from '@/services/user-manager/user-manager-settings';

const userManager = new UserManager(configuration);

export default userManager;