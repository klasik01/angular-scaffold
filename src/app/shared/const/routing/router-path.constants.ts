export class RouterPaths {
  static HOME = {
    BASE: {
      label: 'Home',
      path: 'home',
    },
  };

  static DASHBOARD = {
    BASE: {
      label: 'Dashboard',
      path: 'dashboard',
    },
  };

  static USER_INFO = {
    BASE: {
      label: 'User Info',
      path: 'user-info',
    },
  };

  static PAGE_NOT_FOUND = {
    BASE: {
      label: 'Page not found',
      path: '404',
    },
  };

  static NOT_AUTHORIZED = {
    BASE: {
      label: 'Not Authorized',
      path: 'not-authorized',
    },
  };

  static LOGIN_BASE = 'login';

  static LOGOUT_BASE = 'logout';

  static AUTHORIZATION_BASE = 'authorization';

  static PATHMATCH = 'full';

  static WILDCARD = '**';
}
