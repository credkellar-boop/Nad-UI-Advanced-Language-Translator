module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Simulates a browser for tests
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
