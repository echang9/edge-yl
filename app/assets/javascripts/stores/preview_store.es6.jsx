(() => {
  class PreviewStore {

    // --------------------------------------------------
    // Setup
    // --------------------------------------------------
    constructor() {
      this.form = {};
      this.bindListeners({
        handleStoreForm: PreviewActions.STORE_FORM,
        handleStoreSubmission: PreviewActions.STORE_SUBMISSION,
      });
    }

    handleStoreSubmission(response) {
      var submission = response.submission;
      this.form.pages.map((page) => {
        var infoQuestions = new Set();
        var questions = page.questions;   
        //fix rendering waiver/information-type questions with the right title
        questions.map((question) => {
          if (question.style === 'information') {
            infoQuestions.add(question.key);
          }
        });
        questions.map((question) => {
          var key = question.key;
          if (submission[key] !== undefined) {
            question.value = submission[key];
            if (infoQuestions.has(question.key + '_info')) {
              question.title = question.description;
            }
          }
        });
      });
    }

    handleStoreForm(response) {
      this.form = response.form;
    }
  }
  this.PreviewStore = alt.createStore(PreviewStore);
})();
