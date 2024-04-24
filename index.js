/**
 * @type {import('prettier').Options}
 */
module.exports = {
	// better for a11y + allows for personalized indentation locally
	useTabs: true,

	// sensible default
	printWidth: 110,

	// allow CRLF locally on windows
	// MUST SET "* text=auto" IN .gitattributes (!)
	endOfLine: "auto",

	// Default rules from Prettier 3.2.5 below
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
	embeddedLanguageFormatting: "auto",
	singleAttributePerLine: false,
};
