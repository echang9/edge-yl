class ImportCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          padding: '24px',
          marginTop: '24px',
        }
      ),
      footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <div style={this.styles.header}>
          <h2>{'Import schools'}</h2>
        </div>
        <div>
          <form action={'api/import'} method={'post'} encType={'multipart/form-data'}>
            <input type={'file'} name={'upload'} accept={'*.csv'} />
            <input type={'submit'} />
          </form>
        </div>  
      </div>
    );
  }
}