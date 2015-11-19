(() => {
  class StudentsStore {

    constructor() {
      this.sidebar = true;
      this.students = [];
      this.bindListeners({
        handleToggleSidebar: StudentsActions.TOGGLE_SIDEBAR,
        handleUpdateStudents: StudentsActions.UPDATE_STUDENTS,
      });
    }

    handleToggleSidebar(sidebar) {
      this.sidebar = sidebar;
    }

    handleUpdateStudents(students) {
      this.students = students;
    }
  }
  this.StudentsStore = alt.createStore(StudentsStore);
})();