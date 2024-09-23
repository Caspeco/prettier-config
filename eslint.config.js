import { vanillaConfig } from "@caspeco/eslint-config";

const config = [
	{ ignores: ["test/__fixtures__", "test/__snapshots__/", "vitest.config.ts", "eslint.config.js"] },
	...vanillaConfig,
];

export default config;
