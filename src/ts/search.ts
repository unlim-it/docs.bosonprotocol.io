// @ts-ignore
import algoliasearch from "algoliasearch/lite";
import instantsearch from "instantsearch.js";
import { searchBox, hits } from 'instantsearch.js/es/widgets';

class SearchBox {
  private search: any

  constructor(applicationId, apiKey, indexName) {
    const searchClient = algoliasearch(applicationId, apiKey);

    console.log("Constructing search box.")
    console.log(applicationId)
    console.log(apiKey)
    console.log(indexName)

    this.search = instantsearch({
      indexName,
      searchClient
    })
  }

  attach(searchBoxSelector, hitsSelector) {
    console.log("Attaching")
    console.log(searchBoxSelector)
    console.log(hitsSelector)

    this.search.addWidgets([
      searchBox({
        container: searchBoxSelector
      }),

      hits({
        container: hitsSelector,
        templates: {
          item: `
            <div class="bg-white border border-rule-gray p-10 z-20">
              <div class="hit-name">
                <a href="{{url}}">
                  {{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}                
                </a>
              </div>
              <div class="hit-description">
                {{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}
              </div>
            </div>
          `,
        },
      })
    ])

    return this;
  }

  start() {
    this.search.start();
    return this;
  }
}

export default SearchBox