import fs from "node:fs/promises";
import baseConfig from "../index";
import prettier from "prettier";

export async function format(file: string, config = baseConfig): Promise<string> {
	try {
		const buffer = await fs.readFile(file);
		const code = buffer.toString("utf8");

		const result = await prettier.format(code, {
			...config,
			filepath: file,
			parser: "typescript",
		});

		return result;
	} catch (error) {
		console.error(`Error formatting file ${file}:`, error);
		throw error;
	}
}
