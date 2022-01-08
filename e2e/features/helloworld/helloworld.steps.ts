import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import { BASE_URL } from '../../cypress/support/variables';

Given(/^User (\w+) authenticated on application$/, (username) => {
  cy.login(username, 'test', { log: false });
});

Then(/^Should be arrived on site$/, () => {
  cy.url().should('match', new RegExp(`${BASE_URL}`));
});
