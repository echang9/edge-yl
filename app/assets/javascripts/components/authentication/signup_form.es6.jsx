class SignupForm extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('keydown', (event) => this.handleKeyDown(event));
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createUser() {
    AuthenticationActions.createUser(this.props.template);
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      AuthenticationActions.storeAttribute(field, event.target.value);
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.createUser();
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardInput
          action={this.generateHandler('first_name')}
          errors={template.errors.first_name}
          focus={true}
          label={'First name'}
          placeholder={'Kira'}
          value={template.first_name} />
        <CardInput
          action={this.generateHandler('last_name')}
          errors={template.errors.last_name}
          label={'Last name'}
          margin={true}
          placeholder={'Klapper'}
          value={template.last_name} />
        <CardInput
          action={this.generateHandler('email')}
          errors={template.errors.email}
          label={'Email'}
          margin={true}
          placeholder={'volunteer@edgeyl.com'}
          type={'email'}
          value={template.email} />
        <CardInput
          action={this.generateHandler('password')}
          errors={template.errors.password}
          label={'Password'}
          margin={true}
          placeholder={'password'}
          type={'password'}
          value={template.password} />
        <CardInput
          action={this.generateHandler('password_confirmation')}
          errors={template.errors.password_confirmation}
          label={'Password confirmation'}
          margin={true}
          placeholder={'password'}
          type={'password'}
          value={template.password_confirmation} />
        <FormButton
          action={() => this.createUser()}
          content={'Sign up'}
          margin={24} />
      </div>
    );
  }
}

