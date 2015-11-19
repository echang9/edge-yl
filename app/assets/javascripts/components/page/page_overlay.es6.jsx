class PageOverlay extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._node = null;
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      hideOverlay: React.PropTypes.func.isRequired,
      student: React.PropTypes.object.isRequired,
      callback: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {
      hideOverlay: null,
      student: {},
      callback: null,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: '0px',
        left: '0px',
        zIndex: StyleConstants.planes.nine,
        width: '100vw',
        height: '100vh',
        backgroundColor: StyleConstants.colors.fog,
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        zIndex: StyleConstants.planes.nine,
        padding: '8px',
        color: StyleConstants.colors.blue,
      },
      hover: {
        color: StyleConstants.colors.indigo,
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var node = ReactDOM.findDOMNode(this.refs.container);
    this._node = node;
    node.addEventListener('click', (event) => this.handleClick(node));
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      this.props.hideOverlay();
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <Clickable
          action={this.props.hideOverlay}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        <EditModal
          hideOverlay={this.props.hideOverlay}
          student={this.props.student}
          type={this.props.type}
          callback={this.props.callback} />
      </div>
    );
  }
}