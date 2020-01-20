module.exports = {
  ...require('./jest.js'),
  testRegex: '.spec.tsx?$',
  setupFilesAfterEnv: ['<rootDir>/test-setup.js']
}
