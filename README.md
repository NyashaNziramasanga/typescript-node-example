# Typescript Node Example

Getting started with TypeScript and Node JS

## Scripts

```bash
# Run development server on http://localhost:5000/
npm run dev

# Run javascript in Dist folder
npm start

# Build dist folder will app.js
npm run build
```

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

4. Run `npm init` and in package.json add the following lines

```json
  "scripts": {
    "start": "node dist/app.js",
    "dev": "nodemon src/app.ts ",
    "build": "tsc -p ."
  },
```

## Resources

- [TypeScript Docs](https://www.typescriptlang.org/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [TypeScript - The Basics (Video)](https://www.youtube.com/watch?v=ahCwqrYpIuM)
- [TypeScript Setup with Node & Express (Video)](https://www.youtube.com/watch?v=zRo2tvQpus8&t=446s)
- [The TypeScript Guide by flaviocopes](https://flaviocopes.com/typescript/)
