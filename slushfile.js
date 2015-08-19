'use strict';

var path = require('path');
var gulp = require('gulp');
var template = require('gulp-template');
var rename = require('gulp-rename');
var install = require('gulp-install');
var porreta = require('porreta');
var clear = require('clear');
var inquirer = require('inquirer');
var objectAssign = require('object-assign');
var camelCase = require('mout/string/camelCase');
var hyphenate = require('mout/string/hyphenate');
var _ = require('./util');
var gitConfigList = _.gitConfig();
var guessedUserName = _.guessUserName(gitConfigList['user.name']);
var exec = require('child_process').exec;

var read = [
  {name: 'moduleName', message: 'What is the name of your module?', default: porreta()},
  {name: 'moduleDescription', message: 'Give your module a description'},
  {name: 'moduleKeywords', message: 'What are the keywords for your module?'},
  {name: 'authorGitHub', message: 'What is your GitHub username?', default: guessedUserName},
  {name: 'authorUrl', message: 'What is the URL of your website?'},
  {name: 'hasCli', message: 'Will you need a CLI?', type: 'confirm', default: false},
  {name: 'hasBower', message: 'Will you register this module to Bower\'s registry?', type: 'confirm', default: false},
  {name: 'shouldMoveOn', message: 'Should we move on?', type: 'confirm', default: true}
];

var variables = {
  today: _.today(),
  moduleVersion: '1.0.0',
  authorName: gitConfigList['user.name'],
  authorEmail: gitConfigList['user.email']
};

gulp.task('git', ['bootstrap'], function(done) {
  exec('git init && git add . && git commit ./ -m ":zap: First setup."', function(error) {
    if(error) {
      throw error;
    }

    done();
  });
});

gulp.task('bootstrap', function(done) {
  clear();

  inquirer.prompt(read, function(answers) {
    if(!answers.shouldMoveOn) {
      done();
    }

    variables = objectAssign(variables, answers, {
      moduleName: hyphenate(answers.moduleName),
      moduleVariable: camelCase(answers.moduleName),
      moduleKeywords: _.parseModuleKeywords(answers.moduleKeywords, {tabs: 2, newline: true}),
      authorHumanizedUrl: _.humanUrl(answers.authorUrl)
    });

    gulp
        .src(__dirname + '/template/**')
        .pipe(template(variables))
        .pipe(rename(function(path) {
          var underscore = '_README _package'.split(/\s/);
          var dot = 'editorconfig eslintrc gitattributes gitignore travis'.split(/\s/);

          if(~underscore.indexOf(path.basename)) {
            path.basename = path.basename.slice(1);
          } else if(~dot.indexOf(path.basename)) {
            path.basename = '.' + path.basename;
          }
        }))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', done)
        .resume();
  });
});

gulp.task('default', ['git', 'bootstrap']);
