class CardDropdown extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      errors: React.PropTypes.array,
      label: React.PropTypes.string.isRequired,
      margin: React.PropTypes.bool,
      options: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          action: React.PropTypes.action,
          content: React.PropTypes.string,
        })
      ).isRequired,
      value: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      errors: [],
      margin: false,
      value: '',
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      dropdown: false,
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
      section: {
        display: 'flex',
        flexFlow: 'column',
        maxHeight: '40px',
        border: `1px solid ${StyleConstants.colors.gray}`,
      },
    };
  }

  get clickableStyles() {
    return {
      child: {
        paddingRight: '4px',
      },
      default: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px',
      },
    };
  }

  get dropdownStyles() {
    return {
      child: {
        default: {
          padding: '8px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.templates.card,
        {
          display: 'flex',
          flexFlow: 'column',
          top: '0px',
          left: '0px',
          zIndex: StyleConstants.planes.two,
        }
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDropdown() {
    if (this.state.dropdown) {
      return (
        <Dropdown
          action={() => this.setState({ dropdown: false })}
          options={this.props.options}
          styles={this.dropdownStyles} />
      );
    }
  }

  renderErrors() {
    var errors = this.props.errors;
    if (errors && errors.length) {
      return (
        <h6 style={this.styles.errors}>
          {errors[0]}
        </h6>
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        <h6>{this.props.label}</h6>
        <div style={this.styles.section}>
          <Clickable
            action={() => this.setState({ dropdown: true })}
            icon={TypeConstants.icons.expand}
            styles={this.clickableStyles}
            type={'i'}>
            <h6>
              {this.props.value || 'Select one'}
            </h6>
          </Clickable>
          {this.renderDropdown()}
        </div>
        {this.renderErrors()}
      </div>
    );
  }
}