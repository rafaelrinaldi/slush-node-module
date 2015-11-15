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

* The author's name and email are fetched from your global Git configuration.
* It'll try to guess your GitHub user name by parsing your name.
* It'll suggest you a project name by reading your current directory.

```
$ slush node-module
? Module name: my-new-project
? Description: My super cool new project
? Keywords (comma-separated): project, cool, personal
? Your GitHub username: rafaelrinaldi
? URL of your website: http://rinaldi.io
? Will you need a CLI? No
```

After the installation it will:

1. Install your `npm` dependencies.
2. Initialize a fresh Git repository.

## Contents

### General

#### `README.md`

An overview of the module and what it does.

* Travis CI badge to show build status.
* Usage example.
* API documentation.
* Mention to software license and author.

#### `LICENSE`

Software license file which follows the [MIT standard](http://opensource.org/licenses/MIT).

#### `package.json`

`npm` manifest file. Current settings are:

* `1.0.0` by default.
* `MIT` license by default.
* `>=0.10.0` [Node.js](http://nodejs.org) engine by default.
* `lint` task that will lint JavaScript files with [xo](https://github.com/sindresorhus/xo).
* `test` task that will trigger JavaScript linting and then test `test.js` using [`tape`](https://github.com/substack/tape).

#### dotfiles

Files that are hidden by default.

##### `.editorconfig`

[EditorConfig](http://editorconfig.org) configuration file. This is used to enforce consistency between editors and IDEs.

##### `.gitignore`

Files and folders to be ignored by [Git](https://git-scm.com).

##### `.gitattributes`

Simple Git configuration to ensure line endings are normalized across different operating systems.

### CLI

When scaffolding a Node.js module that has a CLI interface:

* It will generate a binary file under `./bin` which is described as a best practice by [the CommonJS standard](http://wiki.commonjs.org/wiki/Packages/1.1#Package_Directory_Layout)
* It will generate `cli.js` file on the project root that will be the command line interface for the module
* The `cli.js` file will expose `exitCode`, `stdout`, `stderr`, `run()`, and `parse()` for better test integration (thanks [@millermedeiros](http://github.com/millermedeiros) for the awesome tip) 
* The program will come with bultin usage instructions (triggered via `--help`) and version number (triggered via `--version`)

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
