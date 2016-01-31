# v2.2.0 (2016/01/31)

* Big refactor to port everything to ES2015.
* Custom Node.js engine for CLI apps that lock into version `>=4`.
* Custom install instructions for CLI apps, suggesting the user to save it globally with `-g`.
* Vim syntax highlighting for the binary file.
* Better `.gitignore` file with patterns that actually make sense.
* Locks [`xo`](https://github.com/sindresorhus/xo) into the latest version always (`*`).
* Linter ES2015 support for CLI apps via `xo`'s `esnext` flag.
* Uses [`tap-spec`](https://github.com/scottcorgan/tap-spec) for better test output.
* Updates all outdated packages.
* Removes Travis CI badge.
* Improvements on the instructions file.

# v1.3.0 (2015/08/25)

* Only offers to add Bower if CLI is falsy.
* Improved CLI scaffolding thanks to @millermedeiros!
* Locked module dependencies version.
* Modified CLI dependencies.
* Fixed typo on CLI file template.
* Removed unused Gulp file.
* Improved and fixed issues with project name suggestion. Closed #3 and #2.

# v1.2.0 (2015/08/25)

* Removed "porreta". Now project name defaults to current directory.
* Better npm "postversion" command.
* Fixed ESLint configuration for variables on top.
* Always use the latest "porreta" version.
* Added "postversion" script.
* Added option to add contributing guides.
* Added contributing guides to the template.

# v1.0.2 (2015/08/19)

* Fixed link for the "add zero" module.

# v1.0.1 (2015/08/19)

* Fixed link for the rename plugin.

# v1.0.0 (2015/08/19)

* Initial release. 
