# prettier-config

Shared config for prettier

## Usage

Add the dependency and mapping for prettier configuration:

### Option 1

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

Install dependencies:
```bash
npm install
```

### Option 2

```diff
 // package.json
 {
   "name": "my-project",
   "version": "1.0.0",
   "devDependencies": {
+    "@caspeco/prettier-config": "github:caspeco/prettier-config#1.0.1",
   }
 }
```

Create a **.prettierrc** , **.prettierrc.yaml** , **.prettierrc.yml** or **.prettierrc.json** file and export a string.

```
"@caspeco/prettier-config"
```

Install dependencies:
```bash
npm install
```

### Option 3

```diff
 // package.json
 {
   "name": "my-project",
   "version": "1.0.0",
   "devDependencies": {
+    "@caspeco/prettier-config": "github:caspeco/prettier-config#1.0.1",
   }
 }
```

Create a **prettier.config.js** or **.prettierrc.js** file and export an object.

```
module.exports = {
  ...require("@caspeco/prettier-config"),
  // endOfLine: 'lf', // to overwrite the property
};
```

Install dependencies:
```bash
npm install
```

