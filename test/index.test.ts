import { expect, it } from "vitest";
import { format } from "./format";
import { getFilteredFilePaths } from "./util";
import { basename } from "path";
import { describe } from "node:test";

interface TestInput {
	content: string;
	snapFile: string;
}

const args: TestInput[] = [];

await getFilteredFilePaths("test/__fixtures__", []).then(async (paths: string[]) => {
	for (const filePath of paths) {
		const result = await format(filePath);
		const snapshotFilePath = `./__snapshots__/${basename(filePath)}.snap`;

		args.push({
			content: result,
			snapFile: snapshotFilePath,
		});
	}
});

describe("checks formatting", () => {
	it.each(args)("should match snapshots", async ({ content, snapFile }) => {
		expect(content).toMatchFileSnapshot(snapFile);
	});
});
