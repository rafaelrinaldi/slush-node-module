'use strict';

const path = require('path');
const gulp = require('gulp');
const template = require('gulp-template');
const rename = require('gulp-rename');
const install = require('gulp-install');
const inquirer = require('inquirer');
const objectAssign = require('object-assign');
const camelCase = require('mout/string/camelCase');
const hyphenate = require('mout/string/hyphenate');
const _ = require('./util');
const gitConfigList = _.gitConfig();
const guessedUserName = _.guessUserName(gitConfigList['user.name']);
const exec = require('child_process').exec;
const pwd = process.cwd().split('/').pop();

const read = [
  {name: 'moduleName', message: 'Module name:', default: pwd},
  {name: 'moduleDescription', message: 'Description:'},
  {name: 'moduleKeywords', message: 'Keywords (comma-separated):'},
  {name: 'authorGitHub', message: 'Your GitHub username:', default: guessedUserName},
  {name: 'authorUrl', message: 'URL of your website:'},
  {name: 'hasCli', message: 'Will you need a CLI?', type: 'confirm', default: false}
];

let paths = [
  `${__dirname}/template/**`
];

let variables = {
  today: _.today(),
  authorName: gitConfigList['user.name'],
  authorEmail: gitConfigList['user.email'],
  /**
   * Apparently `gulp-template` goes crazy if we don't pass on a `version`
   * property. Probably because the `cli.js` file, which is parsed by it, does
   * a require for the npm manifest file in order to find out the software
   * version.
   **/
  version: ''
};

gulp.task('git', ['bootstrap'], done => {
  exec('git init', error => {
    if (error) {
      throw error;
    }

    done();
  });
});

gulp.task('bootstrap', done => {
  inquirer.prompt(read, answers => {
    // Only add CLI support if needed
    if (!answers.hasCli) {
      paths.push(`!${__dirname}/template/cli.js`);
      paths.push(`!${__dirname}/template/{bin,bin/**}`);
    }

    variables = objectAssign(variables, answers, {
      moduleName: hyphenate(answers.moduleName),
      moduleVariable: camelCase(answers.moduleName),
      moduleKeywords: _.parseModuleKeywords(answers.moduleKeywords, {
        soft: true,
        tabs: 4,
        newline: true
      }),
      authorHumanizedUrl: _.humanUrl(answers.authorUrl)
    });

    gulp
        .src(paths)
        .pipe(template(variables))
        .pipe(rename(path => {
          const underscore = `_README _package`.split(/\s/);
          const dot = `editorconfig gitattributes gitignore`.split(/\s/);
          const binary = /^__binary__$/i;

          if (~underscore.indexOf(path.basename)) {
            path.basename = path.basename.slice(1);
          } else if (~dot.indexOf(path.basename)) {
            path.basename = `.${path.basename}`;
          } else if (binary.test(path.basename)) {
            path.basename = variables.moduleName;
          }
        }))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', done)
        .resume();
  });
});

gulp.task('default', ['git', 'bootstrap']);
