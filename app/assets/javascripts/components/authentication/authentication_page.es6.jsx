class AuthenticationPage extends Component {

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
      type: React.PropTypes.oneOf(['login', 'signup']).isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        flex: '1',
        paddingTop: StyleConstants.heights.header,
      },
      footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        margin: '12px 0px',
      },
      label: {
        paddingRight: '4px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(AuthenticationStore.getState());
  }

  componentDidMount() {
    AuthenticationStore.listen(this._listener);
  }

  componentWillUnmount() {
    AuthenticationStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFooter() {
    var bool = this.props.type === 'login';
    var content = bool ? 'Sign up' : 'Log in';
    var label = bool ? 'Don\'t have an account?' : 'Already have an account?';
    var route = bool ? RouteConstants.pages.signup : RouteConstants.pages.login;
    return (
      <div style={this.styles.footer}>
        <p style={this.styles.label}>{label}</p>
        <Clickable
          content={content}
          route={route}
          type={'h6'} />
      </div>
    );
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header active={false} />
        <div style={this.styles.container}>
          <AuthenticationCard
            template={this.state.template}
            type={this.props.type} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
