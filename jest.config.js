module.exports = {
  collectCoverageFrom: [
    'src/token/*.ts'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.step.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  }
};
