/**
 * @type {import('prettier').Options}
 */
module.exports = {
	// Overridden rules
	useTabs: true,
	printWidth: 110,

	// Default rules from Prettier 3.2.5
	tabWidth: 2,
	semi: true,
	singleQuote: false,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	trailingComma: "all",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	rangeStart: 0,
	rangeEnd: Infinity,
	// parser: undefined
	// filepath: undefined,
	requirePragma: false,
	insertPragma: false,
	proseWrap: "preserve",
	htmlWhitespaceSensitivity: "css",
	vueIndentScriptAndStyle: false,
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,
};
