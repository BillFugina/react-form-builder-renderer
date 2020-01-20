module.exports = {
  ...require('./jest.js'),
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/test/helpers/**/*.*',
    '!src/demo-index.tsx',
    '!src/global.ts'
  ],
  coverageReporters: ['text-summary', 'html'],
  coverageThreshold: {
    global: {
      statements: 88,
      branches: 77,
      functions: 83,
      lines: 87
    }
  },
  testRegex: '.spec.tsx?$',
  setupFilesAfterEnv: ['<rootDir>/test-setup.js']
}
