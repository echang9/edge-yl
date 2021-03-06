class StudentPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.number.isRequired,
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(StudentStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    StudentStore.listen(this._listener);
    ViewStore.listen(this._listener);
    StudentActions.fetchStudent(this.props.id);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    StudentStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => ViewActions.storeEditability(),
        content: this.state.editable ? 'Finish' : 'Edit',
      },
      {
        action: () => {
          var student = this.state.student;
          var email = this.props.profile.app_email;
          StudentActions.createDraft(email, student.email);
        },
        content: 'Email',
      },
      {
        action: () => {
          var student = this.state.student;
          window.location = RouteConstants.student.submission(student.id);
        },
        content: 'Form submission',
      },
    ];
  }

  selectProfile() {
    return this.state.profile ?
           this.state.profile :
           this.props.profile;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay) {
      return (
        <StudentPageOverlay
          pairing={this.state.pairing}
          profile={this.selectProfile()}
          student={this.state.student}
          template={this.state.template} />
      );
    }
  }

  render() {
    var student = this.state.student;
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <Toast toast={this.state.toast} />
        <div style={StyleConstants.pages.default}>
          <div style={StyleConstants.pages.content}>
            <GridHeader
              options={this.generateOptions()}
              title={`Student: ${student.full_name}`} />
            <StudentGrid
              editable={this.state.editable}
              media={this.state.media}
              student={student} />
            <PageComments
              editable={this.state.editable}
              profile={this.selectProfile()}
              student={this.state.student}
              type={TypeConstants.comments.student} />
          </div>
        </div>
      </div>
    );
  }
}

