(() => {
  class UsersActions {

    constructor() {
      this.generateActions(
        'storeUsers',
        'toggleSidebar'
      );
    }

    fetchUsers(page) {
      var resolve = (response) => this.storeUsers(response);
      Requester.get(ApiConstants.users.index(page), resolve);
      return true;
    }
  }
  this.UsersActions = alt.createActions(UsersActions);
})();
