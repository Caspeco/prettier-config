# prettier-config

Shared config for prettier

## Usage

Add the dependency and mapping for prettier configuration:

```diff
 // package.json
 {
   "name": "my-project",
   "version": "1.0.0",
+  "prettier": "@caspeco/prettier-config",
   "devDependencies": {
+    "@caspeco/prettier-config": "github:caspeco/prettier-config#1.0.1",
   }
 }
```

Run `npm install`.

## Contributing

- Create a PAT (Classic) on Github with the scope "Packages: Read".
- Set an environment variable locally named `GPR_PRIVATE_READ_TOKEN` to the PAT created
- Run `npm install`
