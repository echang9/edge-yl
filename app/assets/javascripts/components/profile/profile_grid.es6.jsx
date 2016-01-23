class ProfileGrid extends Component {

// --------------------------------------------------
// Props
// --------------------------------------------------
static get propTypes() {
  return {
    editable: React.PropTypes.bool.isRequired,
    media: React.PropTypes.string.isRequired,
    profile: React.PropTypes.object.isRequired,
  }
}

// --------------------------------------------------
// Render
// --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <ProfileCard
          editable={this.props.editable}
          media={this.props.media}
          profile={this.props.profile}
          type={TypeConstants.profile.general} />
        <ProfileCard
          editable={this.props.editable}
          media={this.props.media}
          profile={this.props.profile}
          type={TypeConstants.profile.credentials} />
      </div>
    );
  }
}
