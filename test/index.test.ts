/* eslint-disable @typescript-eslint/no-floating-promises */
import { expect, it } from "vitest";
import { format } from "./format";
import { getFilteredFilePaths } from "./util";
import { basename } from "path";
import { describe } from "node:test";
import baseConfig from "../index";
import { Options } from "prettier";

interface TestInput {
	description: string;
	content: string;
	config: Options;
	snapFile: string;
}

const fixtureTests = await setupConfigTest("test/__fixtures__", []);

describe("checks formatting", () => {
	it.each(fixtureTests)(
		"should match snapshots $description matches $snapFile",
		async ({ content, snapFile }) => {
			await expect(content).toMatchFileSnapshot(snapFile);
		},
	);
});

async function setupConfigTest(path: string, ignoreFiles: string[]): Promise<TestInput[]> {
	const filePaths = await getFilteredFilePaths(path, ignoreFiles);

	const tests = await Promise.all(
		filePaths.map(async (filePath: string) => {
			const result = await format(filePath, baseConfig);
			const snapshotFilePath = `./__snapshots__/${basename(filePath)}.snap`;

			return {
				description: `${basename(filePath)}`,
				content: result,
				config: baseConfig,
				snapFile: snapshotFilePath,
			};
		}),
	);

	return tests;
}
/* eslint-enable @typescript-eslint/no-floating-promises */
