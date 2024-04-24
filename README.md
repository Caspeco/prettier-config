# prettier-config

Shared config for prettier

## Usage

### Option 1: Git reference

Add the dependency and mapping for prettier configuration:

```diff
 // package.json
 {
   "name": "my-project",
   "version": "1.0.0",
+  "prettier": "@caspeco/prettier-config",
   "devDependencies": {
+    "@caspeco/prettier-config": "github:caspeco/prettier-config#<MAJOR.MINOR.PATCH>",
   }
 }
```

Run `npm install`.

### Option 2: Github Packages

Create a PAT (Classic) on Github with the scope "Packages: Read".

Create a `.npmrc`:

```
@caspeco:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GPR_PRIVATE_READ_TOKEN}
```

Set a local environment variable named `GPR_PRIVATE_READ_TOKEN` which contains the token created above.

Add the package using the version you want at the [Github Package](https://github.com/Caspeco/prettier-config/pkgs/npm/prettier-config).

## Contributing

- Create a PAT (Classic) on Github with the scope "Packages: Read".
- Set an environment variable locally named `GPR_PRIVATE_READ_TOKEN` to the PAT created
- Run `npm install`
