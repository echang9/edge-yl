class SuccessPage extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
	static get propTypes() {
		return {
      id: React.PropTypes.string.isRequired,
			target: React.PropTypes.string.isRequired,
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
          alignItems: 'center',
          width: '712px',
          padding: '20px',
          marginTop: '20px',
          textAlign: 'center',
        },
      ),
      icon: {
        width: '100%',
      },
      text: {
        marginTop: '10px',
      },
      wrapper: Object.assign(
        {},
        StyleConstants.pages.wrapper,
        {
          alignItems: 'center',
          flexDirection: 'column',
        },
      ),
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
  	return (
      <div style={this.styles.wrapper}>
    		<div style={this.styles.container}>
          <i style={this.styles.icon} className="fa fa-check-circle fa-5x"></i>
    			<p style={this.styles.text}>{`You have successfully completed the ${this.props.target}
            form for EDGE 2016. You should be receiving a confirmation email shortly.`} </p>
    		</div>
      </div>
  	);
  }
}
