const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: `${__dirname}/reports/test-e2e/`,
  reportPath: `${__dirname}/reports/test-e2e/`,
  metadata: {
    browser: {
      name: 'Chrome',
      version: '60'
    },
    platform: {
      name: 'linux',
    },
    device: 'CI/CD'
  },
  customData: {
    title: 'Run info',
    data: [
      {label: 'Project', value: 'App Angular'},
      {label: 'Release', value: '1.0.0'}
    ]
  }
});
