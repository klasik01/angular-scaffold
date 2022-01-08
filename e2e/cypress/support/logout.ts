import { LOGOUT_PATH, AUTH_REDIRECT_URL, AUTH_URL } from './variables';

export function logout() {
  cy.clearLocalStorage();
  cy.clearCookies({ log: true });

  if (Cypress.env('LOCAL_HOST')) {
    return cy.visit(AUTH_REDIRECT_URL);
  }

  return cy.request({
    url: `${AUTH_URL}/${LOGOUT_PATH}`,
    qs: {
      redirect_uri: AUTH_REDIRECT_URL,
    },
    log: false,
  });
}
