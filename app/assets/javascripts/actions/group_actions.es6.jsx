(() => {
  class GroupActions {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeError',
        'storeGroup',
        'storeGroupables',
        'storeLeadership',
        'storeResults',
        'storeStudentSearch',
        'storeValue',
      );
    }

    // --------------------------------------------------
    // Requests
    // --------------------------------------------------
    /** Sends a request to add the student saved in the
     *  search to the current group. Also fires a request to
     *  reload the page contents, which makes the new student
     *  appear in the group on modal close.
     */
    addStudent(groupId, studentId) {
      if (!studentId) {
        return false;
      }
      var attributes = { group_id: groupId };
      var params = { student: attributes };
      var resolve = (response) => {
        this.fetchGroup(groupId);
        ViewActions.storeToast(true, 'Student added!');
      };
      Requester.update(
        ApiConstants.students.update(studentId),
        params,
        resolve,
      );
      return true;
    }

    deleteStudent(groupId, studentId) {
      var response = confirm('This action removes the student from the group. ' +
                              'It does not delete the student.');
      if (response) {
        var attributes = { group_id : null };
        var params = { student: attributes };
        var resolve = (response) => {
          this.fetchGroup(groupId);
          ViewActions.storeToast(true, 'Student removed!');
        };
        Requester.update(
          ApiConstants.students.update(studentId),
          params,
          resolve,
        );
      return studentId;
      }
    }

    exportGroup(id) {
      Requester.csv(ApiConstants.csvs.group(id), 'group');
      return true;
    }

    fetchGroup(id) {
      var resolve = (response) => this.storeGroup(response);
      Requester.get(ApiConstants.groups.show(id), resolve);
      return true;
    }

    updateGroup(pairing, attributes={}) {
      attributes[pairing.key] = pairing.value;
      var params = { group: attributes };
      var resolve = (response) => this.storeGroup(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.groups.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    updateLeadership(pairing, attributes={}) {
      attributes = { volunteer_id: pairing.value.id };
      var params = { leadership: attributes };
      var resolve = (response) => this.storeLeadership(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.leaderships.update(pairing.id),
        params,
        resolve,
        reject,
      );
      return true;
    }

    // --------------------------------------------------
    // Stores
    // --------------------------------------------------
    storePairing(options) {
      if (options.model === TypeConstants.models.leadership) {
        var resolve;
        resolve = (response) => this.storeGroupables(response);
        Requester.get(ApiConstants.volunteers.groupables, resolve);
      }
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        label: options.label,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }

    storeSearch(active, conferenceId, groupId, query) {
      if (query) {
        var resolve = (response) => this.storeResults(response);
        Requester.get(ApiConstants.searchables.students(conferenceId, groupId, query), resolve);
      }
      return {
        active: active,
        query: query,
      };
    }
  }
  this.GroupActions = alt.createActions(GroupActions);
})();
