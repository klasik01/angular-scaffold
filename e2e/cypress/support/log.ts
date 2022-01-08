export function overrideCypressLog() {
  Cypress.on('window:before:load', (win) => {
    Cypress.log({
      name: 'console.log',
      message: ['wrap on console.log'],
    });

    // pass through cypress log so we can see log inside command execution order
    win.console.log = (...args) => {
      Cypress.log({
        name: 'console.log',
        message: args,
      });
    };
  });

  Cypress.on('log:added', (options) => {
    if (options.instrument === 'command') {
      // tslint-disable-next-line no-console
      console.log(`${(options.displayName || options.name || '').toUpperCase()} ${options.message}`);
    }
  });
}
