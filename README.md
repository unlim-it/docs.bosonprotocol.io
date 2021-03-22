docs.bosonprotocol.io
=====================

The documentation website for Boson Protocol.

## Usage

To start up local development servers:

* Start the webpack dev server
    ```bash
    ./go content:webpack:serve
    ```
* Start the jekyll dev server
    ```bash
    ./go content:jekyll:serve
    ```
* Navigate to [http://localhost:4000](http://localhost:4000)

Before committing, pushing and raising a PR, run the pre-commit build to 
make sure your changes are well formatted and pass all linting rules:

```bash
./go
```

## Contributing

We welcome contributions! Until now, Boson Protocol has been largely worked on by a small dedicated team. However, the ultimate goal is for all of the Boson Protocol repositories to be fully owned by the community and contributors. Issues, pull requests, suggestions, and any sort of involvement are more than welcome.

If you have noticed a bug, [file an issue](/issues). If you have a large pull request, we recommend filing an issue first; small PRs are always welcome.

Questions are also welcome.

By being in this community, you agree to the [Code of Conduct](CODE_OF_CONDUCT.md). Take a look at it, if you haven't already.

### Linting

Before committing, pushing and raising a PR, run the pre-commit build to make sure your changes are well formatted and pass all linting rules:

```sh
./go
```

## License

Licensed under [LGPL v3](LICENSE).