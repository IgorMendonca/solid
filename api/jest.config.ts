export default {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  transform: {
    '.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/*.spec.ts', '**/*.test.ts'],
  preset: '@shelf/jest-mongodb',
};
