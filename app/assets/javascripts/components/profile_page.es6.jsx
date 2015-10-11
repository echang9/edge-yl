class ProfilePage extends Component {

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#eaf0f2',
      },
      body: {
        display: 'flex',
        flex: 1,
        position: 'relative',
        paddingLeft: '172px',
      },
      placeholder: {
        position: 'relative',
        width: '172px',
      },
    };
  }

  handleClick(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header
          handleSidebarClick={this.handleClick.bind(this)} />
        <div style={this.styles.body}>
          <Sidebar shouldShow={this.state.sidebar} />
          <ProfileGrid shouldShow={this.state.sidebar} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

