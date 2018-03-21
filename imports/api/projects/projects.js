import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

class ProjectsCollection extends Mongo.Collection {
    insert(doc, callback) {
        const ourDoc = doc;
        const result = super.insert(ourDoc, callback);
        return result;
    }
    update(selector, modifier) {
        const result = super.update(selector, modifier);
        return result;
    }
    remove(selector) {
        const result = super.remove(selector);
        return false;
    }
}

const Projects = new ProjectsCollection("projects");

Projects.allow({
    insert: () => true,
    update: () => true,
    remove: () => false
});

Projects.schema = new SimpleSchema({
    _id: {
        type: String
    },
    siteURL: {
        type: String,
        optional: true
    },
    skills: {
        type: String,
        optional: true
    },
    client:  { 
		type: Object
	},
		'client.name': { 
			type: String,
			optional: true
		},
		'client.phoneNumber': { 
			type: String,
			optional: true
		},
		'client.location': { 
			type: String,
			optional: true
		},
		'client.timezone': { 
			type: String,
			optional: true
		},
	production:  { 
		type: Object
	},
		'production.url': { 
			type: String,
			optional: true
		},
		'production.adminPanelUrl': { 
			type: String,
			optional: true
		},
		'production.login': { 
			type: String,
			optional: true
		},
		'production.password': { 
			type: String,
			optional: true
		},
    googleDriveUrl: {
        type: String,
        optional: true
    },
    description: {
        type: String
    },
    deadline: {
        type: Date,
        optional: true
    },
    createdAt: {
        type: Date
    }
});

Projects.attachSchema(Projects.schema);

Projects.methods({
    update_field: function(projectId, fieldName, fieldValue) {
        let data = {};
        data[fieldName] = fieldValue;

        Projects.update({ _id: projectId }, { $set: data });
    },
    add_element_to_field_array: function(projectId, fieldName, value) {
        let data = {};
        data[fieldName] = value;

        Projects.update({ _id: projectId }, { $push: data });
    },
    remove_element_from_field_array: function(projectId, fieldName, value) {
        let data = {};
        data[fieldName] = value;

        Projects.update({ _id: projectId }, { $pull: data });
    },
    deleteRestore: function(projectId, state) {
        Projects.update(
            {
                _id: projectId
            },
            {
                $set: { isDeleted: state }
            }
        );
    }
});

export { Projects };