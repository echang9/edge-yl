class GroupLeadership extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderLeadership(leadership) {
    var user = leadership.user;
    if (user) {
      return (
        <CardAttribute
          clickable={true}
          key={leadership.id}
          label={leadership.style}
          route={RouteConstants.users.show(user.id)}
          value={user.full_name} />
      );
    } else {
      return (
        <CardAttribute
          key={leadership.id}
          label={leadership.style} />
      );
    }
  }

  renderLeaderships() {
    var leaderships = this.props.group.leaderships;
    return leaderships.map((leadership) => this.renderLeadership(leadership));
  }

  render() {
    return (
      <div style={StyleConstants.cards.body}>
        {this.renderLeaderships()}
      </div>
    );
  }
}
