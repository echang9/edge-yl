class StudentEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      StudentActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateStudent() {
    StudentActions.updateStudent(this.props.pairing);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var pairing = this.props.pairing;
    if (pairing.type === 'input') {
      return (
        <CardInput
          action={(event) => StudentActions.storeValue(event.target.value)}
          errors={pairing.errors[pairing.key]}
          focus={true}
          label={Helpers.humanize(pairing.key)}
          type={pairing.key === 'birthday' ? 'date' : 'text'}
          value={pairing.value} />
      );
    } else {
      var choices = pairing.choices.map((choice) =>{
      return {
        action: () => StudentActions.storeValue(choice),
        content: Helpers.humanize(choice),
      }});
      return (
        <CardDropdown
          errors={pairing.errors[pairing.key]}
          label={pairing.key}
          options={choices}
          value={Helpers.humanize(pairing.value)} />
      );
    }
  }

  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'Contact Information'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.body}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
