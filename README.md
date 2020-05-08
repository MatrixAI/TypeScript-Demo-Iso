# TypeScript Demo

TypeScript packages can be separated between applications and libraries.

For libraries, the dist directory should be committed into the source. Unless you can configure package.json to build it during preinstall.

For applications, the dist directory should be ignored and not committed to source.

To manage JavaScript dependencies use `package.json`. If you need non-JavaScript dependencies, use the `./default.nix` and `./shell.nix`. Note that `./shell.nix` should contain development dependencies. This means JavaScript dependencies are not directly listed in the Nix expressions.
