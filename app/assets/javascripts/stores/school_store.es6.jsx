(() => {
  class SchoolStore {

    constructor() {
      this.sidebar = true;
      this.school = {
        school: {},
      };
      this.bindListeners({
        handleToggleSidebar: SchoolActions.TOGGLE_SIDEBAR,
        handleStoreSchool: SchoolActions.STORE_SCHOOL,
      });
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }

    handleStoreSchool(school) {
      this.school = school;
    }
  }
  this.SchoolStore = alt.createStore(SchoolStore);
})();