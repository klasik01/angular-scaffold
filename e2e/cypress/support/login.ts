import Chainable = Cypress.Chainable;
import { AUTH_PATH, AUTH_REDIRECT_URL, AUTH_URL, BASE_URL, MOCK_URL, USER_PROFILE_URL } from './variables';

export interface LoginOptions {
  log: boolean;
}

const defaultLoginOptions: LoginOptions = {
  log: false,
};

const SESSION_COOKIE_KEY = 'mod_auth_openidc_session';
Cypress.Cookies.defaults({
  preserve: SESSION_COOKIE_KEY,
});

function requestIDPLogin(options: LoginOptions) {
  const requestOptions = {
    method: 'GET',
    url: `${AUTH_URL}/${AUTH_PATH}`,
    followRedirect: false,
    qs: {
      scope: 'openid email profile',
      client_id: 'boilerplate-oidc',
      redirect_uri: `${BASE_URL}/${AUTH_REDIRECT_URL}`,
      response_mode: 'fragment',
      response_type: 'code',
    },
    log: options.log,
  };
  return cy.request(requestOptions);
}

function readActionUrlFromBody(formBody) {
  const actionUrl = formBody.match(/action\=\"(.*)\" /);
  return actionUrl && actionUrl[1].replace(/&amp;/g, '&');
}

/**
 * Verify if the user is really connected
 */
function verifySession(options: LoginOptions): Chainable<Cypress.Response> {
  return cy
    .request({
      url: USER_PROFILE_URL,
      log: options.log,
    })
    .then(({ body = {} }) => {
      const { userinfo = {} } = body;
      expect(userinfo.lastname).to.equal('test');
      expect(userinfo.firstname).to.equal('test');
      expect(userinfo.email).to.equal('test@test.com');
    });
}

/**
 *
 * @param actionUrl The url given by Keycloak to authenticate a user
 * @param username The username of the user
 * @param password The password of the user
 * @param options The options
 */
function submitLoginForm(
  actionUrl: string,
  username: string,
  password: string,
  options: LoginOptions
): Chainable<Cypress.Response> {
  return cy.request({
    method: 'POST',
    url: actionUrl,
    followRedirect: false,
    form: true,
    body: { username, password },
    log: options.log,
  });
}

/**
 * Request to the application
 */
function requestHomepage(options: LoginOptions) {
  return cy.request({
    url: `${BASE_URL}/${AUTH_REDIRECT_URL}`,
    followRedirect: false,
    log: options.log,
  });
}

/**
 * Force redirect to get the authentication url
 * @param options The options
 */
function requestSession(options: LoginOptions) {
  return requestHomepage(options).then((response) => {
    return cy
      .request({
        url: response.redirectedToUrl,
        followRedirect: false,
        log: options.log,
      })
      .then(({ redirectedToUrl }) =>
        cy.request({
          method: 'GET',
          url: redirectedToUrl.replace('#', '?'),
          followRedirect: false,
          log: options.log,
        })
      );
  });
}

/**
 *
 * @param username The username of the user
 * @param password The password of the user
 * @param options The options for login command
 */
export function login(username, password, options?: Partial<LoginOptions>): Chainable {
  const fullOptions: LoginOptions = Object.assign({}, defaultLoginOptions, options || {});

  if (Cypress.env('LOCAL_HOST')) {
    return cy.visit(MOCK_URL);
  }
  // return cy.visit(AUTH_REDIRECT_URL, {log: fullOptions.log});
  return requestIDPLogin(fullOptions)
    .then((response) => {
      const actionUrl = readActionUrlFromBody(response.body);
      if (actionUrl != null) {
        return submitLoginForm(actionUrl, username, password, fullOptions).then((_) => requestSession(fullOptions));
      } else {
        return Promise.resolve();
      }
    })
    .then((_) => verifySession(fullOptions))
    .then((_) => cy.visit(AUTH_REDIRECT_URL, { log: fullOptions.log }));
}
