class DraftSubject extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      id: React.PropTypes.number,
      errors: React.PropTypes.array,
      margin: React.PropTypes.bool,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      focus: false,
      margin: false,
      value: '',
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        {
          display: 'flex',
          flexFlow: 'column',
          alignSelf: 'stretch',
        },
        this.props.margin && { marginTop: '12px' }
      ),
      error: {
        color: StyleConstants.colors.red,
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.input);
    node.oninput = (event) =>
    DraftActions.storeAttribute('subject', event.target.value,
                               this.props.id);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderError() {
    var errors = this.props.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.error}>
          {errors[0]}
        </h6>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h6>Subject</h6>
        <input
          defaultValue={this.props.value}
          placeholder="Subject"
          ref={'input'}
          type="text" />
        {this.renderError()}
      </div>
    );
  }
}
