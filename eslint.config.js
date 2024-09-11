import { vanillaConfig } from "@caspeco/eslint-config";

const config = [{ ignores: ["test/__fixtures__", "test/__snapshots__/"] }, ...vanillaConfig];

export default config;
