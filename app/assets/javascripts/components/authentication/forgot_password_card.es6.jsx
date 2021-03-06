class ForgotPasswordCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          alignSelf: 'stretch',
          padding: '24px',
        },
      ),
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    return (
      <div style={this.styles.header}>
        <h2>{'Forgot password'}</h2>
      </div>
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderHeader()}
        <ForgotPasswordForm template={this.props.template} />
      </div>
    );
  }
}
