class Sidebar extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      shouldShow: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      shouldShow: true,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        position: 'absolute',
        top: '48px',
        left: '0px',
        width: '172px',
        transition: 'left 0.375s ease-out',
      },
      notShow: {
        left: '-172px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var style = Object.assign(
      {},
      this.styles.container,
      !this.props.shouldShow && this.styles.notShow
    );
    return (
      <div style={style}>
        <SidebarGroup />
        <SidebarFooter />

      </div>
    );
  }
}
