(() => {
  class HeaderStore {

    constructor() {
      this.results =[];
      this.search = {
        active: false,
        query: '',
      };
      this.bindListeners({
        storeResults: HeaderActions.STORE_RESULTS,
        storeSearch: HeaderActions.STORE_SEARCH,
      });
    }

    storeResults(response) {
      // TODO(Warren): Once searchables are sent down with serializers,
      // we'll need to change this to handle the root key of the JSON.
      this.results = response['pg_search/documents'];
    }

    storeSearch(search) {
      if (search.query === undefined) {
        search.query = this.search.query;
      } else if (search.query === '') {
        search.active = false;
      }
      this.search = search;
    }
  }
  this.HeaderStore = alt.createStore(HeaderStore);
})();
