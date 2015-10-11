class ProfileGrid extends Component {
  
  get styles() {
    return {
      container: {
        position: 'relative',
        width: '70%',
        height: '100vh',
        padding: 10,
        float: 'right',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}> 
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
        <ProfileCard 
          cardName={'Card Name'}
          cardBody={'profile card body text'}/>
      </div>
    );
  }
}
