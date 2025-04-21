# ViviComm Lite Atlas Documentation Website Installation and Usage

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Prerequisites
Before installing and using the Yarn package manager, you will need to have Node.js installed. To see if you already have Node.js installed, type the following command into your local command line terminal:

```shell
npm -v
```

To install Node.js, follow our tutorial for <a href="https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04" target="_blank">Ubuntu</a>, <a href="https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-debian-10" target="_blank">Debian</a>, <a href="https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-centos-8" target="_blank">CentOS</a>,  <a href="https://www.digitalocean.com/community/tutorials/how-to-install-node-js-and-create-a-local-development-environment-on-macos" target="_blank">MacOS</a>, or <a href="https://community.chocolatey.org/packages/nodejs" target="_blank">Windows</a>

### Installing Yarn

Unix:
```shell
sudo npm install -g yarn
```

Windows:
```shell
npm install -g yarn
```

On windows with the current version immediately with pkg manager:

<a href="https://chocolatey.org/install" target="_blank">Install Chocolatey</a>

```shell
choco install nodejs
```

```shell
choco install yarn
```

```shell
corepack enable
```

```shell
corepack prepare yarn@4.9.1 --activate
```

```shell
yarn --version
```
output: 4.9.1
Continue with installing Docusaurus.

--------------------------
### Checking availability
```shell
yarn --version
```
output: 1.22.22

### Update Yarn to 4.9.1 version

```shell
yarn set version berry
```

### Checking Yarn version

```shell
yarn --version
```
Output: 4.9.1

### How to use Yarn

```shell
yarn --help
```

### How to use Yarn install

```shell
yarn install --help
```

### Start your yarn project if it is not exists

```shell
yarn init -y
```
------------------------------
## Installation (fresh install if do not want to use the ViviComm Lite Atlas Github Project)

### Create GitHub project Directory and ViviComm-Lite-Atlas project directory
```shell
mkdir GitHubProjects
```
```shell
cd GitHubProjects
```

/////////////////
## Install and Init Yarn
```shell
yarn install
```
```shell
yarn init -y
```
```shell
yarn set version berry
```
////////////////////

## Install Docosaurus

```shell
npx create-docusaurus@latest ViviComm-Lite-Atlas classic --typescript
```
```shell
cd ViviComm-Lite-Atlas
```
```shell
git init
```

```shell
git remote add origin https://github.com/ViviQD/ViviComm-Lite-Atlas
```

```shell
yarn init -y
```

```shell
yarn install
```


//////////////
### Add to existing project (if do not have to install Docosaurus in the last step)

```shell
yarn add @docusaurus/core @docusaurus/preset-classic 
```
////////////////

## Add Plugins
### Mermaid for UML

```shellxxxxxxxxxx
cd ViviComm-Lite-Atlas
```
```shellxxxxxxxxxxxx
yarn init -y
```
```shell
yarn add @docusaurus/theme-mermaid
```
After setup finished, do not forget to download Mermaid.tsx from ViviComm-Lite-Atlas Github and add it to the src folder of the Docusaurus project within ViviCommLiteAtlas project: 
ViviCommLiteAtlas/ViviComm-Lite-Atlas/src/Mermaid.tsx

### Copy main project files with cp or File Manager

```
.github
ViviComm-Lite-Atlas/docs
ViviComm-Lite-Atlas/blog
ViviComm-Lite-Atlas/src
ViviComm-Lite-Atlas/static/img
ViviComm-Lite-Atlas/versioned_docs
ViviComm-Lite-Atlas/docusaurus.config.ts
ViviComm-Lite-Atlas/package.json
ViviComm-Lite-Atlas/sidebars.ts
ViviComm-Lite-Atlas/
.gitignore
```

Hint: Keep the file and folder structure!

### Local Development

At this point modify docusaurus.config.ts file for your GitHub Pages.
<a href="https://www.youtube.com/watch?v=9iVNf0T09dE" target="_blank">Docusaurus GitHub Pages Integration</a>

```shell
yarn install
```
```shell
yarn run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.



### Build

```shell
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment
### Using SSH (non-Windows):

```shell
USE_SSH=true yarn deploy
```

### Not using SSH: (non-Windows)

```shell
GIT_USER=<Your GitHub username> yarn deploy
```

### Windows standard:

```shell
yarn deploy
```


If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

Reference: [https://docusaurus.io/docs/installation](https://docusaurus.io/docs/installation)
