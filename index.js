const git = require('simple-git')(process.env.PWD);
const exec = require('child_process').exec;

const load = configs => {
  const isDev = process.env.NODE_ENV === 'development';

  const syncIterate = (apps, index) => {
    const app = apps[index];
    const { branch, repositoryUrl, branchDev, path } = configs[app];
    const usedBranch = isDev ? branchDev || branch : branch || 'master';

    console.log(`Removing directory at ${path} path`);
    exec(`rm -rf ${path}`, () => {
  
      console.log(`Starting to load ${app} ...`);
      git.clone(repositoryUrl, path, `-b${usedBranch}`, err => {
        if (!err) {

          console.log(`Application ${app} loaded successfully from ${usedBranch} branch of ${repositoryUrl} remote path.`);
          exec(`cd ${path} && npm i && cd -`, (err, stdout, stderr) => {
            if (apps.length - 1 > index) {
              syncIterate(apps, index + 1);
            } else {
              console.log('Application is ready to start!!!');
            }
          });
        }
      });
    });
  };

  const apps = Object.keys(configs);
  const index = 0;
  
  syncIterate(apps, index);
}

module.exports = load;
