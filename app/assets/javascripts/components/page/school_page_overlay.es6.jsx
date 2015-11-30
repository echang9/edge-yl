class SchoolPageOverlay extends Overlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      overlay: React.PropTypes.shape({
        active: React.PropTypes.bool.isRequired,
        target: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
      }).isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      overlay: {
        active: false,
        target: TypeConstants.overlay.type.preview,
        type: TypeConstants.overlay.target.edit,
      },
      school: {},
    };
  }

//  --------------------------------------------------
//  Render
//  --------------------------------------------------
  renderModal() {
    return (
      <EditSchoolModal
        overlay={this.props.overlay}
        school={this.props.school} />
    );
  }

  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <Clickable
          action={(event) => SchoolActions.storeOverlay(false)}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderModal()}
      </div>
    );
  }
}
