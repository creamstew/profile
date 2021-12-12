/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  collectCoverageFrom: ['pages'],
  coverageDirectory: 'coverage',
  errorOnDeprecated: true,
  moduleDirectories: ['node_modules', 'pages'],
  moduleFileExtensions: ['ts', 'tsx', 'json', 'js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/lib/(.*)': '<rootDir>/lib/$1',
  },
  roots: ['<rootDir>'],
  testMatch: ['<rootDir>/**/?(*.)(spec|test).(ts)?(x)'],
  testPathIgnorePatterns: ['<rootDir>.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
