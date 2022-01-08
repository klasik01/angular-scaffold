declare namespace Cypress {
  interface Chainable {
    login(username: string, password: string, options?: Partial<any>): Chainable;

    logout(): Chainable;
  }
}
