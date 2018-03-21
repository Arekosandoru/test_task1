// This defines a starting set of data to be loaded if the app is loaded with an empty db.
import './fixtures.js';

import { Projects } from '/imports/api/projects/projects.js';
import { Users } from '/imports/api/users/users.js';

import '/imports/api/projects/server/publications.js';
import '/imports/api/users/server/publications.js';