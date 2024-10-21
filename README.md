# prettier-config

Shared config for prettier

## Usage

### Option 1: Git reference

```bash
npm i @caspeco/prettier-config
```

```diff
 // package.json
 {
   "name": "my-project",
   "version": "1.0.0",
+  "prettier": "@caspeco/prettier-config"
 }
```

Set a local environment variable named `GPR_PRIVATE_READ_TOKEN` which contains the token created above.

Add the package using the version you want at the [Github Package](https://github.com/Caspeco/prettier-config/pkgs/npm/prettier-config).

## Release

- Go to [Github Releases](https://github.com/Caspeco/prettier-config/releases)
- Click "Draft a new release"
- Enter the version that you'd like to release, skip the `v` prefix.
- Publish

_You can ignore the version in the `package.json` file, that is only used when you're publishing manually to NPM, e.g. a preview version._

### Publish a preview to NPM

```bash
npm --ignore-scripts publish --access public --tag next
```

This step requires you to be a collaborator on the NPM package.
