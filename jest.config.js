/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: [
    "**/__tests__/**/*.(test|spec).(ts|tsx)", 
    "**/?(*.)+(test|spec).(ts|tsx)"           
  ],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json", 
    },
  },
};
