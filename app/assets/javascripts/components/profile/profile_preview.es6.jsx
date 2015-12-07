class ProfilePreview extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
    }
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.defaults.card,
        {
          alignItems: 'center',
          padding: '24px 0px',
          marginTop: '12px',
        }
      ),
      image: {
        width: '312px',
        borderRadius: '50%',
        marginTop: '4%',
      },
      name: {
        paddingTop: '24px',
        fontSize: StyleConstants.fonts.sizes.largest,
      },
      position: {
        paddingTop: '12px',
        fontSize: StyleConstants.fonts.sizes.small,
        fontStyle: 'italic',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var profile = this.props.profile;
    return (
      <div style={this.styles.container}>
        <img
          src='https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'
          style={this.styles.image} />
        <span style={this.styles.name}>
          {`${profile.first_name} ${profile.last_name}`}
        </span>
        <span style={this.styles.position}>
          {'Volunteer, Recruitment Group'}
        </span>
      </div>
    );
  }
}

