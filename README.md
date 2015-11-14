# slush-node-module

> Scaffold a Node.js module with [Slush](http://slushjs.github.io).

## Install

1. Install [`gulp.js`](http://gulpjs.com)
2. Install [Slush](http://slushjs.github.io)
3. Install the [`slush-node-module`](http://slushjs.github.io) generator

```sh
$ npm install -g gulp slush slush-node-module
```

## Usage

Create a new folder for your project and `cd` into it:

```sh
$ mkdir my-new-project && cd my-new-project
```

Run the generator and answer the questions.

* The author's name and email are fetched from your Git configuration.
* It'll try to guess your GitHub user name by parsing your name.
* It'll suggest you a project name by reading your current directory.

```
$ slush node-module

? What is the name of your module? menisquencia
? Give your module a description Does some cool stuff.
? What are the keywords for your module? cli, tool, menisquencia
? What is your GitHub username? (rafaelrinaldi) 
? What is the URL of your website? http://rinaldi.io
? Will you need a CLI? No
? Will you register this module to Bower's registry? No
? Would you like to add a contributing guide? Yes
? Should we move on? (Y/n)
```

After the installation it will:

1. Install your `npm` dependencies.
2. Initialize a fresh Git repository.
3. Stage all new files.
4. Commit your first setup.

## Contents

### General

#### `README.md`

An overview of the module and what it does.

* Travis CI badge to show build status.
* Usage example.
* API documentation.
* Mention to software license and author.

#### `CHANGELOG.md`

This file is used to keep a history of module releases.

#### `LICENSE`

Software license file which follows the [MIT standard](http://opensource.org/licenses/MIT).

#### `package.json`

`npm` manifest file. Current settings are:

* `1.0.0` by default.
* `MIT` license by default.
* `>=0.12.0` [Node.js](http://nodejs.org) engine by default.
* `lint` task that will lint JavaScript files with [ESLint](http://eslint.org). Uses the [`no-use-extend-native`](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) plugin.
* `test` task that will trigger JavaScript linting and then test `test.js` using [`tape`](https://github.com/substack/tape).

#### dotfiles

Files that are hidden by default.

##### `.editorconfig`

[EditorConfig](http://editorconfig.org) configuration file. This is used to enforce consistency between editos and IDEs.

##### `.eslintrc`

ESLint configuration file. This is my JavaScript linter of choice and I use it to enfornce code visual consistency, best practices and to avoid possible issues with the language itself.

##### `.eslintignore`

Files and folders to be ignored by ESLint. Currently only `dist/` is added to the list.

##### `.gitignore`

Files and folders to be ignored by [Git](https://git-scm.com).

##### `.gitattributes`

Simple Git configuration to ensure line endings are normalized across different operating systems.

##### `.travis.yml`

[Travis CI](http://travis-ci.org) configuration file. It will run tests against the following environments:

* [io.js](https://iojs.org)
* [Node.js version `0.12`](https://github.com/joyent/node/releases/tag/v0.12.0)
* [Node.js version `0.10`](https://github.com/joyent/node/releases/tag/v0.10.0)

### CLI

When scaffolding a Node.js module that has a CLI interface:

* It will generate a binary file under `./bin` which is described as a best practice by [the CommonJS standard](http://wiki.commonjs.org/wiki/Packages/1.1#Package_Directory_Layout)
* It will generate `cli.js` file on the project root that will be the command line interface for the module
* The `cli.js` file will expose `exitCode`, `stdout`, `stderr`, `run()`, and `parse()` for better test integration (thanks [@millermedeiros](http://github.com/millermedeiros) for the awesome tip) 
* The program will come with bultin usage instructions (triggered via `--help`) and version number (triggered via `--version`)

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
