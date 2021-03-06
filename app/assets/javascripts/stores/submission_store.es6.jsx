(() => {
  class StudentSubmissionStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.form = {};
      this.bindListeners({
        handleStoreForm: StudentSubmissionActions.STORE_FORM,
        handleStoreSubmission: StudentSubmissionActions.STORE_SUBMISSION,
      });
    }

    handleStoreSubmission(response) {
      var submission = response.submission;
      this.form.pages.map((page) => {
        var infoQuestions = {};
        var questions = page.questions;
        questions.map((question) => {
          if (question.style === TypeConstants.questions.information) {
            infoQuestions[question.key] = question.title;
          }
        });
        questions.map((question) => {
          var key = question.key;
          if (submission[key] !== undefined) {
            if (infoQuestions[question.key + '_info'] !== undefined) {
              question.title = infoQuestions[question.key + '_info'];
              question.value = submission[key];
            } else if (question.style === TypeConstants.questions.checkbox) {
              if (submission[key] === null || submission[key] === undefined) {
                question.value = [];
              } else {
                question.value = submission[key].split(',').join(', ');
              }
            } else {
              question.value = submission[key];
            }
          }
        });
      });
    }

    handleStoreForm(response) {
      this.form = response.form;
    }
  }
  this.StudentSubmissionStore = alt.createStore(StudentSubmissionStore);
})();
