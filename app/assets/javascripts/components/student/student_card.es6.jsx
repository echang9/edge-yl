class StudentCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
      target: React.PropTypes.oneOf([
        'comment',
        'contact',
        'conference',
        'outreach',
        'guardian',
        'preview',
      ]).isRequired,
      type: React.PropTypes.oneOf([
        'create',
        'edit',
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
      target: TypeConstants.overlay.target.preview,
      type: TypeConstants.overlay.type.edit,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          width: '32.5%',
          height: '312px',
          marginTop: '1%',
        }
      ),
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay(event) {
    StudentActions.storeOverlay(
      true,
      TypeConstants.overlay.type.edit,
      this.props.target
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.target) {
      case TypeConstants.overlay.target.conference:
        return <StudentConference student={this.props.student} />;
      case TypeConstants.overlay.target.contact:
        return <StudentContact student={this.props.student} />;
      case TypeConstants.overlay.target.guardian:
        return <StudentGuardian student={this.props.student} />;
      case TypeConstants.overlay.target.outreach:
        return <StudentOutreach student={this.props.student} />;
      case TypeConstants.overlay.target.preview:
        return <StudentPreview student={this.props.student} />;
    };
  }

  renderTitle() {
    switch (this.props.target) {
      case TypeConstants.overlay.target.conference:
        return 'Conference Information';
      case TypeConstants.overlay.target.contact:
        return 'Student Information';
      case TypeConstants.overlay.target.guardian:
        return 'Guardian Information';
      case TypeConstants.overlay.target.outreach:
        return 'Student Outreach';
      case TypeConstants.overlay.target.preview:
        return 'Student Preview';
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <CardHeader
          action={(event) => this.showOverlay(event)}
          content={this.renderTitle()}
          icon={TypeConstants.icons.edit} />
        {this.renderBody()}
      </div>
    );
  }
}
