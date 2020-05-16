# Typescript Node Example

Getting started with typescript and node js

## Getting Started

1. Make sure typescript is installed

```bash
# install typescript compiler globally
sudo npm i -g typescript

# Run app.ts with typescript compiler (-w watch consistently)
tsc app.ts -w
```

Basic typescript cli commands

```bash
# Create a typescript config file
tsc --init

# Show typescript version
tsc --version
```

2. After `tsc --init` you will want to uncomment and change the location of where the compiled javascript will go

```javascript
# from:
"target": "es5"
"outDir": "./",
"rootDir": "./",

# to:
"target": "es6" // Change from es5 to es6
"outDir": "./dist", // Uncomment and change output dir for JS files
"rootDir": "./src", // Uncomment and change dir for typescript files
"moduleResolution": "node", // Uncomment
```

3. Create src folder and run `tsc`

[TypeScript Docs](https://www.typescriptlang.org/)
