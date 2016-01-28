class RoomsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      room: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.room.conference,
        TypeConstants.room.default,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderConference() {
    if (this.props.type == TypeConstants.room.default) {
      var room = this.props.room;
      return (
        <CardAttribute
          clickable={true}
          label={'Conference'}
          route={RouteConstants.conferences.show(room.conference.id)}
          type={'h5'}
          value={room.conference.name} />
      );
    }
  }
  render() {
    var room = this.props.room;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
        <CardAttribute
          clickable={true}
          label={'Number'}
          route={RouteConstants.rooms.show(room.id)}
          type={'h4'}
          value={room.number} />
        <CardAttribute
          clickable={true}
          label={'Capacity'}
          value={room.capacity} />
        <CardAttribute
          clickable={true}
          label={'Gender'}
          value={room.gender} />
        {this.renderConference()}
      </div>
    );
  }
}