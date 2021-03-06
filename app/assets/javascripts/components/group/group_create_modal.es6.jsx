class GroupCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      groupables: React.PropTypes.arrayOf(React.PropTypes.object),
      template: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.pages.conference,
        TypeConstants.pages.groups,
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      groupables: [],
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      if (this.props.type === TypeConstants.pages.conference) {
        ConferenceActions.closeOverlay();
      } else if (this.props.type === TypeConstants.pages.groups) {
        GroupsActions.closeOverlay();
      }
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createGroup() {
    var actions;
    if (this.props.type === TypeConstants.pages.conference) {
      actions = ConferenceActions;
    } else if (this.props.type === TypeConstants.pages.groups) {
      actions = GroupsActions;
    }
    actions.createGroup(this.props.template);
  }

  generateChoice(groupable, type) {
    var actions;
    var attributes = this.props.template.attributes;
    if (this.props.type === TypeConstants.pages.conference) {
      actions = ConferenceActions;
    } else if (this.props.type === TypeConstants.pages.groups) {
      actions = GroupsActions;
    }
    // don't display an already selected leader as a choice for a different leadership position
    if ((attributes.primary_leader &&
         groupable.id === attributes.primary_leader.volunteer_id) ||
        (attributes.secondary_leader &&
         groupable.id === attributes.secondary_leader.volunteer_id)) {
      return;
    }
    return {
      action: () => actions.storeAttribute(
        type === 'primary' ? 'primary_leader' : 'secondary_leader',
        {
          style: type === 'primary' ? 1 : 0,
          volunteer_id: groupable.id,
        },
      ),
      content: groupable.full_name,
    };
  }

  generateChoices(type) {
    var groupables = this.props.groupables;
    return groupables.map((groupable) => this.generateChoice(groupable, type)).
                      filter((groupable) => groupable !== undefined );
  }

  generateHandler(field) {
    return(event) => {
      if (this.props.type === TypeConstants.pages.conference) {
        ConferenceActions.storeAttribute(field, event.target.value);
      } else if (this.props.type === TypeConstants.pages.groups) {
        GroupsActions.storeAttribute(field, event.target.value);
      }
    };
  }

  generateOptions() {
    return [
      {
        action: () => this.createGroup(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  generateValue(type) {
    var groupables = this.props.groupables;
    var attributes = this.props.template.attributes;
    if (type === 'primary' && attributes.primary_leader) {
      var id = attributes.primary_leader.user_id;
      var volunteer = groupables.find((groupable) => groupable.volunteer_id === id);
      return volunteer.full_name;
    } else if (type === 'secondary' && attributes.secondary_leader) {
      var id = attributes.secondary_leader.user_id;
      var volunteer = groupables.find((groupable) => groupable.volunteer_id === id);
      return volunteer.full_name;
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var errors = this.props.template.errors;
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'New Group'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          <CardDropdown
            action={this.generateHandler('letter')}
            choices={this.generateChoices('primary')}
            errors={errors.leaderships_attributes}
            label={'Primary Leader'}
            margin={true}
            value={this.generateValue('primary')} />
          <CardDropdown
            errors={errors.leaderships_attributes}
            choices={this.generateChoices('secondary')}
            label={'Secondary Leader'}
            margin={true}
            value={this.generateValue('secondary')} />
        </div>
      </div>
    );
  }
}
