const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./"
});

/** @type {import('jest').Config} */
const customJestConfig = {
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	testRegex: ".*.test.tsx?$",
	transform: {
		"^.+\\.(svg)$": "<rootDir>/src/__mocks__/svg.js"
	}
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
