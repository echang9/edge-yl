(() => {
  class StudentsActions {

    constructor() {
      this.generateActions(
        'storeStudents',
        'toggleSidebar'
      );
    }

    fetchStudents(page) {
      resolve = (response) => this.storeStudents(response);
      Requester.get(ApiConstants.students.index(page), resolve);
      return true;
    }
  }
  this.StudentsActions = alt.createActions(StudentsActions);
})();
