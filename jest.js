module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  modulePaths: ['<rootDir>/src/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom'
}
