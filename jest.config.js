module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Essential for testing browser-based logic
  moduleNameMapper: {
    // If you start using @/ paths in your imports
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
