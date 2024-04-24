import fs from "node:fs/promises";
import baseConfig from "../index";
import prettier from "prettier";

export const format = async (file: string, config = baseConfig) => {
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
};
