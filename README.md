# docs.bosonprotocol.io

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
* If you develop in a guest VM but use the browser on you host machine, you may not be able to access the local site using `localhost`. In this case, add the following to `bsn-local-default.yaml` to start the Jekyll server on 0.0.0.0:
```
    # deployment
    host: 0.0.0.0

```
   ** DO NOT CHECK THIS CHANGE IN **

    You may also need to change the host file in the VM from 127.0.0.1 localhost -> 0.0.0.0 localhost 


Before committing, pushing and raising a PR, run the pre-commit build to 
make sure your changes are well formatted and pass all linting rules:

```bash
./go
```

## Instructions for Creating New Pages
* To add a single top-level page
    * Create a `<<title>>.md` file in the `src/docs` directory. 
    * Copy the Front Matter from another top-level page (.md file) like `faqs.md` and change the `title`, `short_title`, and `permalink ` values.
    * **DO NOT** change the value of `layout`
    * Example Front Matter
        ```
                * ---
                * layout: docs
                * title: "Boson Protocol: Docs: FAQs"
                * short_title: "FAQs"
                * permalink: /faqs/
                * ---

        ```
* To add a page with sub-pages
    * Create a folder in the `src/docs` directory.
    * Add a .md file with the same name as the folder you just created to the `src/docs` directory. This becomes the index page in the folder.
    * Follow the directions above for copying the Front Matter from another top-level page and changing values as needed.
    * Add a .md file to the folder for each sub-section you want to create.
    * Copy the Front Matter from the sub-page of another folder and change the `title`, `short_title`, and `permalink ` values.

* Update `src/_data/navigation.yml` so that links to your pages(s) will be rendered in the left navigation bar
* It is necessary to stop and restart the Jekyll server using the above-mentioned command to see changes. 
* Follow instructions in the Contributing section

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