class UsersCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      user: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var user = this.props.user;
    return (
      <div style={StyleConstants.cards.wrapper(this.props.media)}>
        <CardHeader content={'Volunteer'} />
        <div style={StyleConstants.cards.body}>
          <CardAttribute
            clickable={true}
            label={'Name'}
            route={RouteConstants.users.show(user.id)}
            type={'h4'}
            value={user.full_name} />
          <CardAttribute
            label={'Email'}
            value={user.email} />
        </div>
      </div>
    );
  }
}

