import { Meteor } from "meteor/meteor";

import { Users } from "/imports/api/users/users.js";

if (Meteor.isServer) {
    Meteor.publish("users.all", function() {
        return Users.find();
    });
}
