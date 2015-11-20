(() => {
  class SchoolsStore {

    constructor() {
      this.schools = [];
      this.sidebar = true;
      this.bindListeners({
        handleToggleSidebar: SchoolsActions.TOGGLE_SIDEBAR,
        handleStoreSchools: SchoolsActions.STORE_SCHOOLS,
      });
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }

    handleStoreSchools(schools) {
      this.schools = schools;
    }
  }
  this.SchoolsStore = alt.createStore(SchoolsStore);
})();