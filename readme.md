## Installion tips
When installing declaration files with `typings`, use either of the two methods:

1. Direct path:
 * `node_modules/.bin/typings install --global --save dt~react`
2. npm run command parameters [npm-run-script Doc](https://docs.npmjs.com/cli/run-script) (using the `--` before parameters). This way is only if you setup the commands in your *package.json.*
 * "scripts": {
     "typings": "typings"
   }
 * Then ex: `npm run typings -- install --global --save dt~react-dom`
