class StudentsPage extends Component {

  static get defaultState() {
    return { sidebar: true };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingLeft: '196px',
      },
      placeholder: {
        width: '196px',
      },
      body: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '0px 12px',
      },
    };
  }

  // TODO(Warren): Remove this temporary method after our api is ready.
  get students() {
    return [
      {
        age: 16,
        birthday: '1/1/1999',
        email: 'katelyn_marchan@gmail.com',
        first_name: 'Katelyn',
        last_name: 'Marchan',
        id: 1,
        home_address: '2616 Telegraph Avenue',
        phone_number: '(408) 436-7654',
        school: 'School One',
        school_address: 'School Ones address',
        status: 'Pending',
      },
      {
        age: 15,
        birthday: '12/25/2000',
        email: 'jonie_distefano@gmail.com',
        first_name: 'Jonie',
        last_name: 'Distefano',
        id: 2,
        home_address: '123 Fake Street',
        phone_number: '(510) 333-3333',
        school: 'School Two',
        school_address: 'School Twos address',
        status: 'Attending',
      },
      {
        age: 16,
        birthday: '11/11/1999',
        email: 'melva_currence@gmail.com',
        first_name: 'Melva',
        last_name: 'Currence',
        id: 3,
        home_address: 'Cory Hall Rm 512',
        phone_number: '(888) 555-5555',
        school: 'School Three',
        school_address: 'School Threes address',
        status: 'Pending',
      },
    ];
  }

  handleClick(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={this.handleClick.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.body}>
            <StudentsFilters />
            <StudentsGrid students={this.students} />
          </div>
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
