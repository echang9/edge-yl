class FormInput extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      question: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '18px',
      },
      errors: {
        color: StyleConstants.colors.red,
      },
      input: {
        flex: '1',
        padding: '8px',
        marginLeft: '24px',
        fontSize: StyleConstants.fonts.sizes.smallest,
      },
      required: {
        paddingLeft: '4px',
        color: StyleConstants.colors.red,
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    node.addEventListener('input', (event) => this.handleChange(event));
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleChange(event) {
    var question = this.props.question;
    FormActions.storeResponse(
      question.section_id,
      question.id,
      event.target.value
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderErrors() {
    var errors = this.props.question.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.errors}>
          {errors[0]}
        </h6>
      );
    }
  }

  renderRequired() {
    if (this.props.question.is_required) {
      return <h6 style={this.styles.required}>{'*'}</h6>;
    }
  }

  render() {
    var question = this.props.question;
    return (
      <div style={this.styles.container}>
        <h5>{question.title}</h5>
        {this.renderRequired()}
        <input
          ref={'container'}
          style={this.styles.input}
          placeholder={question.placeholder}
          value={question.value} />
        {this.renderErrors()}
      </div>
    );
  }
}