# Contributing to `<%= moduleName %>`

> Simple guide on how to contribute to the project.

Hey there :wave: Thanks for taking the time to contribute! This document should provide you with all the information needed.

Please, take a moment to review this document in order to make the contribution process easy and effective.

## General

### Questions

If you have a question, make sure it wasn't [already answered](https://github.com/<%= authorGitHub %>/<%= moduleName %>/issues?q=label%3Asupport). If it wasn't, please feel free to file an issue.

### Bugs

Bug reports are tricky. Please provide as much context as possible.

### Feature requests

Feature requests are always appreciated! The only thing is that they might not get implemented. The main goal is to keep things small and focused so we usually favor more abstract features and so new addons and extensions are easy to be build upon.

## Git workflow

1. Fork the repository.
2. Create a new branch following one of the patterns below (name them as you wish, just make sure to use the same prefixes):
  * `feature/my-awesome-feature`
  * `fix/fixed-that-for-you`
  * `improvement/some-great-improvement`
3. Start working your magic :sparkles:
4. Commit your changes.
5. Open a pull request. Please, detail the pull request as much as you can. Also make sure to mention people and current issues involved on the PR context.

## Development

To make the project ready for development, first install its dependencies:

```sh
$ npm install
```

### Code linting

As an effort to keep the code consistent, we rely on code linting. To lint the code, simply run:

```sh
$ npm run lint
```

Note that linting is tied to the `test` script itself. That means any pull requests where the linting breaks, CI will notify us and therefore it will be considered invalid.

### Test

To run tests, simply run the following command. This is used in CI testing.

```sh
$ npm test
```
