class FormSection extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
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
            options={['hi','lol']}
            title={'Birthday'}
          />
          <FormDropdown
            options={['Nevada','California']}
            title={'State'}
          />
        </div>
      </div>
    );
  }
}
