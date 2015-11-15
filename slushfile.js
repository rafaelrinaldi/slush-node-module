'use strict';

var path = require('path');
var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var install = require('gulp-install');
var inquirer = require('inquirer');
var objectAssign = require('object-assign');
var camelCase = require('mout/string/camelCase');
var hyphenate = require('mout/string/hyphenate');
var _ = require('./util');
var gitConfigList = _.gitConfig();
var guessedUserName = _.guessUserName(gitConfigList['user.name']);
var exec = require('child_process').exec;
var pwd = process.cwd().split('/').pop();

var read = [
  {name: 'moduleName', message: 'Module name:', default: pwd},
  {name: 'moduleDescription', message: 'Description:'},
  {name: 'moduleKeywords', message: 'Keywords (comma-separated):'},
  {name: 'authorGitHub', message: 'Your GitHub username:', default: guessedUserName},
  {name: 'authorUrl', message: 'URL of your website:'},
  {name: 'hasCli', message: 'Will you need a CLI?', type: 'confirm', default: false},
  {name: 'hasContributing', message: 'Would you like to add a contributing guide?', type: 'confirm', default: false}
];

var variables = {
  today: _.today(),
  moduleVersion: '1.0.0',
  authorName: gitConfigList['user.name'],
  authorEmail: gitConfigList['user.email']
};

var paths = [
  __dirname + '/template/**'
];

gulp.task('git', ['bootstrap'], function(done) {
  exec('git init && git add . && git commit ./ -m ":zap: First setup."', function(error) {
    if(error) {
      throw error;
    }

    done();
  });
});

gulp.task('bootstrap', function(done) {
  inquirer.prompt(read, function(answers) {
    // Only add CLI support if needed
    if(!answers.hasCli) {
      paths.push('!' + __dirname + '/template/cli.js');
      paths.push('!' + __dirname + '/template/bin/*');
    }

    // Only add contributing guides if needed
    if(!answers.hasContributing) {
      paths.push('!' + __dirname + '/template/CONTRIBUTING.md');
    }

    variables = objectAssign(variables, answers, {
      moduleName: hyphenate(answers.moduleName),
      moduleVariable: camelCase(answers.moduleName),
      moduleKeywords: _.parseModuleKeywords(answers.moduleKeywords, {tabs: 2, newline: true}),
      authorHumanizedUrl: _.humanUrl(answers.authorUrl)
    });

    gulp
        .src(paths)
        .pipe(template(variables))
        .pipe(rename(function(path) {
          var underscore = '_README _package'.split(/\s/);
          var dot = 'editorconfig gitattributes gitignore'.split(/\s/);
          var binary = /^__binary__$/i;

          if(~underscore.indexOf(path.basename)) {
            path.basename = path.basename.slice(1);
          } else if(~dot.indexOf(path.basename)) {
            path.basename = '.' + path.basename;
          } else if(binary.test(path.basename)) {
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
