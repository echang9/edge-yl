class AuthenticationCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf(['login', 'signup']).isRequired,
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
          width: '472px',
          padding: '24px',
          marginTop: '24px',
        }
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
  renderForm() {
    if (this.props.type === 'login') {
      return <LoginForm template={this.props.template} />;
    } else {
      return <SignupForm template={this.props.template} />;
    }
  }

  renderHeader() {
    return (
      <div style={this.styles.header}>
        <h2>{this.props.type === 'login' ? 'Login' : 'Signup'}</h2>
      </div>
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderHeader()}
        {this.renderForm()}
      </div>
    );
  }
}