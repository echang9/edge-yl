class HeaderSearch extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        height: '30px',
      },
      input: {
        flex: '1',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '1px',
      },
      section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '64px',
        backgroundColor: StyleConstants.colors.indigo,
        borderRadius: '1px',
        color: StyleConstants.colors.white,
      },
    };
  }

  render() {
    return (
      <form style={this.styles.container}>
        <div style={this.styles.section}>
          <i className={"fa fa-search fa-1x"} />
        </div>
        <input
          placeholder={'Search for a student, school, or recruiter'}
          style={this.styles.input}>
        </input>
      </form>
    );
  }
}
