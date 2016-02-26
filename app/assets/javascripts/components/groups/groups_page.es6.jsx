class GroupsPage extends Component {

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
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(GroupsStore.getState());
    this.setState(ProfileStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    GroupsActions.fetchGroups(this.props.conference);
    GroupsStore.listen(this._listener);
    ProfileStore.listen(this._listener);
    ViewStore.listen(this._listener);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    GroupsStore.unlisten(this._listener);
    ProfileStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => GroupsActions.exportGroups(this.props.conference.id),
        content: 'Export',
      },
      {
        action: () => ViewActions.storeEditability(),
        content: this.state.editable ? 'Finish' : 'Edit',
      },
      {
        action: () => GroupsActions.storeTemplate(
          TypeConstants.models.group,
          { conference_id: this.props.conference.id }),
        content: 'New',
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
        <GroupsPageOverlay
          conference={this.state.conference}
          groupables={this.state.groupables}
          template={this.state.template} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
      {this.renderOverlay()}
      <Header profile={this.selectProfile()} />
      <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <div style={StyleConstants.pages.content}>
            <PageHeader
              conference={this.props.conference}
              conferences={this.props.conferences}
              options={this.generateOptions()}
              title={'Groups'}
              type={'groups'} />
            <GroupsGrid
              editable={this.state.editable}
              media={this.state.media}
              groups={this.state.groups}
              type={TypeConstants.groups.default} />
          </div>
        </div>
      </div>
    );
  }
}
