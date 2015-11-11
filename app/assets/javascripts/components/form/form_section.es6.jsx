class FormSection extends Component {

// TODO(Sonia): Add a 'required' proptype
  static get propTypes() {
    return {
      title: React.PropTypes.string.isRequired,
      updateValue: React.PropTypes.func.isRequired,
    };
  }

  static get defaultProps() {
    return {};
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
      },
      header: {
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
      },
      title: {
        fontSize: StyleConstants.fonts.sizes.medium,
      },
      line: {
        flex: '1',
        height: '1px',
        marginLeft: '10px',
        borderTop: 'solid gray 1px',
      },
      questions: {
        padding: '24px',
      },
    };
  }
  
  get dropdownStyles() {
    return {
      child: {
        default: {
          flex: '1',
          padding: '12px',
        },
        hover: {
          backgroundColor: StyleConstants.colors.turquoise,
        },
      },
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexFlow: 'column',
          position: 'absolute',
          width: '128px',
          top: '48px',
          right: '0px',
        }
      ),
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <span style={this.styles.title}>{this.props.title}</span>
          <span style={this.styles.line} />
        </div>
        <div style={this.styles.questions}>
          <FormField
            title={'First Name'}
            placeholder={'Emily'} />
          <FormField
            title={'Last Name'}
            placeholder={'Wilson'} />
          <FormParagraph
            title={'Student Description'}
            placeholder={'This student is great'} />
          <FormDropdown 
            options={[{content:'hi'}, {content:'lol'}]}
            title={'Birthday'}
          />
        </div>
      </div>
    );
  }
}
