class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.cards.index,
        { flexFlow: 'row' },
        this.props.media === 'large' && { width: '49%' },
        (this.props.media === 'medium' ||
         this.props.media === 'small') && { width: '100%' },
      ),
      image: {
        width: '128px',
        height: '128px',
        borderRadius: '50%',
      },
      section: {
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        flex: '1',
        paddingLeft: '24px',
      },
    };
  }

  get clickableStyles() {
    return {
      hover: {
        opacity: '0.875',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <Clickable
          styles={this.clickableStyles}
          route={RouteConstants.students.show(student.id)}
          type={'img'}>
          <img
            src={'https://scontent.fsnc1-1.fna.fbcdn.net/hphotos-xfp1/t31.0-8/11856297_10200932572512494_2256826043885795533_o.jpg'}
            style={this.styles.image} />
        </Clickable>
        <div style={this.styles.section}>
          <Clickable
            content={`${student.first_name} ${student.last_name}`}
            route={RouteConstants.students.show(student.id)}
            type={'h3'} />
          <h6>{student.cell_phone}</h6>
          <h6>{student.email}</h6>
          <h6>{`Flagged: ${student.is_flagged}`}</h6>
          <h6>{`Primary: ${student.is_primary}`}</h6>
          <h6>{`Status: ${student.registration_status}`}</h6>
          <Clickable
            content={student.school.name}
            route={RouteConstants.schools.show(student.school.id)}
            type={'h5'} />
        </div>
      </div>
    );
  }
}

