class StartPage extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conferences: React.PropTypes.array,
      id: React.PropTypes.string,
      target: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      conferences: [],
      id: null,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      body:  Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          padding: '36px',
          marginTop: '12px',
        },
      ),
      dropdown: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        marginRight: '24px',
      },
      footer: {
        display: 'flex',
        paddingTop: '24px',
      },
      header: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          padding: '36px',
          marginTop: '24px',
        },
      ),
      paragraph: {
        paddingBottom: '20px',
      },
      questions: {
        paddingTop: '20px',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
      },
    };
  }


  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createSubmission() {
    var attributes = { current_page: 0 };
    if (this.props.target === 'school') {
      var params = { school_submission: attributes };
      var resolve = (response) => {
        var submission = response.school_submission;
        window.location = RouteConstants.forms.school(1, submission.id);
      };
      Requester.post(
        ApiConstants.submissions.school.create,
        params,
        resolve,
      );
    } else if (this.props.target === 'student') {
      window.location = RouteConstants.forms.student(1, this.props.id);
    }
    return true;
  }

  generateChoice(conference) {
    return {
      action: null,
      content: conference.name,
    };
  }

  generateChoices() {
    var conferences = this.props.conferences;
    return conferences.map((conference) => this.generateChoice(conference));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var target = this.props.target;
    if (target == 'school') {
      return this.renderSchoolForm();
    } else if (target == 'student') {
      return this.renderStudentForm();
    }
  }

  renderSchoolForm() {
    return (
      <div>
        <div style={this.styles.section}>
          <p style={this.styles.paragraph}>
            Signing up for EDGE is a two-step process. First, a school
            advisoror teacher will select a student and submit school
            information and student contact information to us via this form.
            Then, we will reach out to the student directly to confirm their
            registration and obtain needed emergency contact, medical,
            transportation, newspaper announcement, and waiver information.
          </p>
          <p style={this.styles.paragraph}>
            Below are instructions on how to fill out the selection form. All
            selections must be made through the school or through one of our
            non-profit partners. Please contact us if you are an interested student
            but are unsure of who to contact at your school to fill out this form.
          </p>
        </div>
        <div style={this.styles.section}>
          <h3>To register your selected student:</h3>
          <br />
          <p><b>START:</b> Click the START HERE button below.</p>
          <p><b>Step 1:</b> Fill in your school information on the next page and click NEXT.</p>
          <p><b>Step 2:</b> Fill in your contact information on the next page and click NEXT.</p>
          <p><b>Step 3:</b> Fill in your student's contact information and click NEXT.</p>
          <p><b>Step 4a:</b> If you have an alternate student, select YES, fill in his/her information, and click NEXT.</p>
          <p><b>Step 4b:</b> If you do not have an alternate student if not, select NO and click NEXT.</p>
          <p><b>Step 5:</b> Review the information you have provided and when ready click SUBMIT.</p>
          <p><b>Step 6a:</b> You will receive a confirmation email at the email address you provided.</p>
          <p>
            <b>Step 6b:</b> Your student will receive a notification email at the
            email address (of the student) provided - please be sure the email is valid
            and one they check frequently. They will be receiving instructions on how to
            confirm/finish their registration via that email. We may ask for your assistance
            in helping the student confirm their registration.
          </p>
          <p style={this.styles.paragraph}><b>
            IMPORTANT! Please do not use the same email address for you and your student.
            If your student does not have an email, please contact us.
          </b></p>
        </div>
        <div style={this.styles.section}>
          <p><b>Questions? Please contact us at registration@edgeyl.org.</b></p>
          <p><b>
            You may also leave us a message at (510) 408-6606, but
            please note that we generally respond much faster to emails.
          </b></p>
        </div>
      </div>
    );
  }

  renderStudentForm() {
    return (
      <div></div>
    );
  }

  render() {
    return (
      <div style={StyleConstants.wrappers.center}>
        <div style={StyleConstants.pages.center}>
          <div style={this.styles.header}>
            <h1>{`EDGE Registration - ${Helpers.humanize(this.props.target)}`}</h1>
          </div>
          <div style={this.styles.body}>
            {this.renderBody()}
            <div style={this.styles.footer}>
              <div style={this.styles.dropdown}>
                <DropdownButton
                  choices={this.generateChoices()}
                  />
              </div>
              <FormButton
                action={() => this.createSubmission()}
                content={'START HERE'} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
