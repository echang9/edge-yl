(() => {
  class StudentActions {

    constructor() {
      this.generateActions(
        'closeOverlay',
        'storeAttribute',
        'storeComment',
        'storeError',
        'storeStudent',
        'toggleEditability',
      );
    }

    createComment(template, profile, student) {
      var attributes = {};
      attributes[template.key] = template.value;
      attributes.commentable_id = student.id;
      attributes.commentable_type = 'Student';
      attributes.user_id = profile.id;
      var params = { comment: attributes };
      var resolve = (response) => this.storeComment(response);
      Requester.post(
        ApiConstants.comments.create,
        params,
        resolve,
      );
      return true;
    }

    fetchStudent(id) {
      var resolve = (response) => this.storeStudent(response);
      Requester.get(ApiConstants.students.show(id), resolve);
      return true;
    }

    storeTemplate(options) {
      return {
        choices: options.choices,
        errors: {},
        id: options.id,
        key: options.key,
        model: options.model,
        type: options.type,
        value: options.value,
      };
    }

    updateStudent(template) {
      var attributes = {};
      attributes[template.key] = template.value;
      var params = { student: attributes };
      var resolve = (response) => this.storeStudent(response);
      var reject = (response) => this.storeError(response);
      Requester.update(
        ApiConstants.students.update(template.id),
        params,
        resolve,
        reject,
      );
      return true;
    }
  }
  this.StudentActions = alt.createActions(StudentActions);
})();
