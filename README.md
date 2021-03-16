docs.bosonprotocol.io
=====================

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
