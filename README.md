<a href="https://www.npmjs.com/package/@artur93gev/app-loader"><img src="https://img.shields.io/badge/npm-@artur93gev--app--loader-brightgreen.svg"></a> <a href="https://www.npmjs.com/package/@artur93gev/app-loader"><img src="https://img.shields.io/npm/v/@artur93gev/app-loader.svg"></a>
# App-loader

Script can be usefull if you want to manipulate with repositories. 

## Usage example

```js
// config.js
const loader = require('app-loader');

const configs = {
  app: {
    path: 'some_local_path',
    repositoryUrl: 'some_git_repository_url',
    branch: 'prod_branch_name',
    devBranch: 'dev_branch_name',
  },
  app1: {
    path: 'some_local_path1',
    repositoryUrl: 'some_git_repository_url',
    branch: 'prod_branch_name',
    devBranch: 'dev_branch_name',
  },
};

loader(configs);
```

Than in you can call it from command line executing `node config.js`.
The script will clone the repository either from `devBranch` or from `branch` depending on `process.env.NODE_ENV`(default master).
