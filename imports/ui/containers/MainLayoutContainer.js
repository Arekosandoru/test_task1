import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Projects } from '../../api/projects/projects.js';
import { Users } from '../../api/users/users.js';

import MainLayout from '../layouts/MainLayout.js';

export default withTracker(() => {
  Meteor.subscribe('users.all');
  Meteor.subscribe('projects.all');

  return {
    user: Meteor.user(),
    users: Users.find().fetch(),
    project: Projects.findOne(),
  };
})(MainLayout);
