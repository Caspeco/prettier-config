import { promises as fsPromises, Dirent } from "fs";
import { join } from "path";

const { readdir } = fsPromises;

export async function getFilteredFilePaths(directory: string, ignoreFiles: string[]): Promise<string[]> {
	try {
		const files: Dirent[] = await readdir(directory, { withFileTypes: true });

		const paths: string[] = files
			.filter((file: Dirent) => !ignoreFiles.includes(file.name))
			.map((file: Dirent) => join(directory, file.name));

		return paths;
	} catch (error) {
		console.error("Error reading directory");
		console.error(error);
		return [];
	}
}
