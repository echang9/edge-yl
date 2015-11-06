class Dropdown extends Component {

  static get propTypes() {
    return {
      options: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      styles: React.PropTypes.shape({
        child: React.PropTypes.shape({
          default: React.PropTypes.object,
          hover: React.PropTypes.object,
        }),
        container: React.PropTypes.object,
      }),
    };
  }

  static get defaultProps() {
    return {
      options: [],
      styles: {
        child: {
          default: {},
          hover: {},
        },
        container: {},
      },
    };
  }

  renderOption(option, index) {
    return (
      <Clickable
        content={option.content}
        func={option.func}
        key={index}
        route={option.route}
        styles={this.props.styles.child} />
    );
  }

  renderOptions() {
    return this.props.options.map(this.renderOption.bind(this));
  }

  render() {
    return (
      <div style={this.props.styles.container}>
        {this.renderOptions()}
      </div>
    );
  }
}