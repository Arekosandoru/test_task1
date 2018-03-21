import { Meteor } from "meteor/meteor";

import { Projects } from "/imports/api/projects/projects.js";

if (Meteor.isServer) {
    Meteor.publish("projects.all", function() {
        return Projects.find(
            {},
            {
                fields: {
                    _id: 1,
                    siteURL: 1,
                    skills: 1,
                    client: 1,
                    production: 1,
                    googleDriveUrl: 1,
                    description: 1,
                    deadline: 1,
                    createdAt: 1
                }
            }
        );
    });
}
