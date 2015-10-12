class SidebarItem extends Component {

  static get propTypes() {
    return {
      label: React.PropTypes.string.isRequired,
      icon: React.PropTypes.string.isRequired,
    };
  }

  get styles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
        padding: '30px',
        boxSizing: 'border-box',
      },
      label: {
        position: 'relative',
        fontSize: '14px',
        paddingLeft: '12px',
      },
      icon: {
        position: 'relative',
        width: '16px',
        height: 'auto',
        color: '#565A5C',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <i
          style={this.styles.icon}
          className={this.props.icon} />
        <span style={this.styles.label}>{this.props.label}</span>
      </div>
    );
  }
}

