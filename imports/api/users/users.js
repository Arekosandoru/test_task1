import { Mongo } from "meteor/mongo";
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

export const Users = Meteor.users;

Users.allow({
    insert: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fieldNames, modifier) {
        return doc._id === userId;
    },
    remove: function(userId, doc) {
        return false;
    }
});

Users.methods({
    update_field: function(userId, fieldName, fieldValue) {
        let data = {};
        data[fieldName] = fieldValue;

        Users.update({ _id: userId }, { $set: data });
    },
    add_element_to_field_array: function(userId, fieldName, value) {
        let data = {};
        data[fieldName] = value;

        Users.update({ _id: userId }, { $push: data });
    },
    remove_element_from_field_array: function(userId, fieldName, value) {
        let data = {};
        data[fieldName] = value;

        Users.update({ _id: userId }, { $pull: data });
    },
    deleteRestore: function(userId, state) {
        Users.update(
            {
                _id: userId
            },
            {
                $set: { isDeleted: state }
            }
        );
    }
});
