(() => {
  class SchoolActions {

    constructor() {
      this.generateActions(
        'storeSchool'
      );
    }

    fetchSchool(id) {
      var resolve = (response) => this.storeSchool(response);
      Requester.get(ApiConstants.schools.show(id), resolve);
      return true;
    }

    storeOverlay(active, type, target) {
      return {
        active: active,
        target: target,
        type: type,
      };
    }

    updateSchool(id, params) {
      var resolve = (response) => this.storeSchool(response);
      Requester.update(ApiConstants.schools.update(id), params, resolve);
      return true;
    }
  }
  this.SchoolActions = alt.createActions(SchoolActions);
})();

